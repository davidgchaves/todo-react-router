export const partial = (f, ...xs) => f.bind(null, ...xs)

const pipe2 = (f, g) => (...xs) => g(f(...xs))
export const pipe = (...fns) => fns.reduce(pipe2)
