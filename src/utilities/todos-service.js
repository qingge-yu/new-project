import * as todoAPI from './todos-api';

export async function createTodo(todoData) {
    console.log(todoData, 'this is todo data: ')
    const todo = await todoAPI.create(todoData)
    return { todo }
}