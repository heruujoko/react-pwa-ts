import request from '../utils/request.utils';
import { plainToClass } from 'class-transformer';
import Todo from "../pojo/Todo";

const getTodo = async (id: number): Promise<Todo> => {
    const resp = await request.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return plainToClass(Todo, resp);
};

export default {
    getTodo,
}
