function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

const objA = { name: 'John', hobbies: ['reading', 'sports'] };
const objB = { age: 25, isAdmin: true };

const result = merge(objA, objB);
console.log(result);
