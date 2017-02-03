const baseUrl = "http://localhost:8080/todos"
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const requestFor = (verb, todo) => ({
  method: verb,
  headers,
  body: JSON.stringify(todo)
})

const deleteRequest = id => ({
  method: 'DELETE',
  headers
})

export const loadTodos = () =>
  fetch(baseUrl)
    .then(res => res.json())

export const createTodo = todo =>
  fetch(baseUrl, requestFor('POST', todo))
    .then(res => res.json())

export const saveTodo = todo =>
  fetch(`${baseUrl}/${todo.id}`, requestFor('PUT', todo))
    .then(res => res.json())

export const destroyTodo = id =>
  fetch(`${baseUrl}/${id}`, deleteRequest(id))
