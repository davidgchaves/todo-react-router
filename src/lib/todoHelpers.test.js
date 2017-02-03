import { addTodo, findById, filterTodos, removeTodo, toggleTodo, updateTodo } from './todoHelpers'

test('addTodo adds the passed todo to the todos list', () => {
  const initialTodos = [
    { id: 1, name: '1', isComplete: false },
    { id: 2, name: '2', isComplete: false }
  ]
  const newTodo = { id: 3, name: '3', isComplete: false }
  const expectedTodos = [
    { id: 1, name: '1', isComplete: false },
    { id: 2, name: '2', isComplete: false },
    { id: 3, name: '3', isComplete: false }
  ]

  expect(
    addTodo(newTodo, initialTodos)
  ).toEqual(expectedTodos)
})

test('addTodo does not mutate the existing todos list', () => {
  const initialTodos = [
    { id: 1, name: '1', isComplete: false },
    { id: 2, name: '2', isComplete: false }
  ]
  const newTodo = { id: 3, name: '3', isComplete: false }

  expect(
    addTodo(newTodo, initialTodos)
  ).not.toBe(initialTodos)
})

test('findById returns the right todo from the existing todos list', () => {
  const initialTodos = [
    { id: 1, name: '1', isComplete: false },
    { id: 2, name: '2', isComplete: false },
    { id: 3, name: '3', isComplete: false }
  ]
  const expectedTodo = { id: 2, name: '2', isComplete: false }

  expect(
    findById(2, initialTodos)
  ).toEqual(expectedTodo)
})

test('toggleTodo toggles the `isComplete` property to true', () => {
  const initialTodo = { id: 2, name: '2', isComplete: false }
  const expectedTodo = { id: 2, name: '2', isComplete: true }

  expect(
    toggleTodo(initialTodo)
  ).toEqual(expectedTodo)
})

test('toggleTodo toggles the `isComplete` property to false', () => {
  const initialTodo = { id: 2, name: '2', isComplete: true }
  const expectedTodo = { id: 2, name: '2', isComplete: false }

  expect(
    toggleTodo(initialTodo)
  ).toEqual(expectedTodo)
})

test('toggleTodo does not mutate the original todo', () => {
  const initialTodo = { id: 2, name: '2', isComplete: false }

  expect(
    toggleTodo(initialTodo)
  ).not.toBe(initialTodo)
})

test('updateTodo updates the passed todo in the todos list', () => {
  const initialTodos = [
    { id: 1, name: '1', isComplete: false },
    { id: 2, name: '2', isComplete: false },
    { id: 3, name: '3', isComplete: false }
  ]
  const updatedTodo = { id: 2, name: '2', isComplete: true }
  const expectedTodos = [
    { id: 1, name: '1', isComplete: false },
    { id: 2, name: '2', isComplete: true },
    { id: 3, name: '3', isComplete: false }
  ]

  expect(
    updateTodo(initialTodos, updatedTodo)
  ).toEqual(expectedTodos)
})

test('updateTodo does not mutate the existing todos list', () => {
  const initialTodos = [
    { id: 1, name: '1', isComplete: false },
    { id: 2, name: '2', isComplete: false },
    { id: 3, name: '3', isComplete: false }
  ]
  const updatedTodo = { id: 2, name: '2', isComplete: true }

  expect(
    updateTodo(initialTodos, updatedTodo)
  ).not.toBe(initialTodos)
})

test('removeTodo deletes the todo with the passed id from the todos list', () => {
  const initialTodos = [
    { id: 1, name: '1', isComplete: false },
    { id: 2, name: '2', isComplete: false },
    { id: 3, name: '3', isComplete: false }
  ]
  const targetId = 2
  const expectedTodos = [
    { id: 1, name: '1', isComplete: false },
    { id: 3, name: '3', isComplete: false }
  ]

  expect(
    removeTodo(targetId, initialTodos)
  ).toEqual(expectedTodos)
})

test('removeTodo does not mutate the existing todos list', () => {
  const initialTodos = [
    { id: 1, name: '1', isComplete: false },
    { id: 2, name: '2', isComplete: false },
    { id: 3, name: '3', isComplete: false }
  ]
  const targetId = 2

  expect(
    removeTodo(targetId, initialTodos)
  ).not.toBe(initialTodos)
})

test('filterTodos returns all todos for the root route', () => {
  const initialTodos = [
    { id: 1, name: '1', isComplete: false },
    { id: 2, name: '2', isComplete: true },
    { id: 3, name: '3', isComplete: false }
  ]
  const rootRoute = '/'

  expect(
    filterTodos(rootRoute, initialTodos)
  ).toEqual(initialTodos)
})

test('filterTodos returns only completed todos for the complete route', () => {
  const initialTodos = [
    { id: 1, name: '1', isComplete: false },
    { id: 2, name: '2', isComplete: true },
    { id: 3, name: '3', isComplete: false }
  ]
  const completeRoute = '/complete'
  const expectedTodos = [{ id: 2, name: '2', isComplete: true }]

  expect(
    filterTodos(completeRoute, initialTodos)
  ).toEqual(expectedTodos)
})

test('filterTodos returns only incompleted todos for the active route', () => {
  const initialTodos = [
    { id: 1, name: '1', isComplete: false },
    { id: 2, name: '2', isComplete: true },
    { id: 3, name: '3', isComplete: false }
  ]
  const activeRoute = '/active'
  const expectedTodos = [
    { id: 1, name: '1', isComplete: false },
    { id: 3, name: '3', isComplete: false }
  ]

  expect(
    filterTodos(activeRoute, initialTodos)
  ).toEqual(expectedTodos)
})
