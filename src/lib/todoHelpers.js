export const addTodo = (x, xs) => [...xs, x]

export const generateId = () => Math.floor(Math.random() * 1000)

export const findById = (id, xs) => xs.find(x => x.id === id)

export const toggleTodo = (todo) => ({ ...todo, isComplete: !todo.isComplete })

export const updateTodo = (xs, x) => {
  const i = xs.findIndex(y => y.id === x.id)
  return [
    ...xs.slice(0, i),
    x,
    ...xs.slice(i + 1)
  ]
}

export const removeTodo = (id, xs) => {
  const i = xs.findIndex(x => x.id === id)
  return [
    ...xs.slice(0, i),
    ...xs.slice(i + 1)
  ]
}
