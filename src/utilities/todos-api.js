import sendRequest from './send-request';

const BASE_URL = '/api/todos';

export function getAll() {
    return sendRequest(BASE_URL)
}

export function createTodo(todoData) {
    return sendRequest(BASE_URL, 'POST', todoData);
}