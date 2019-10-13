export function isObject(arg) {
  return arg != null && typeof arg === 'object' && Array.isArray(arg) === false
}