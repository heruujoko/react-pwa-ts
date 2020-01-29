import request from './api.service';
import { plainToClass } from 'class-transformer';
import Todo from "../pojo/Todo";

const getTodo = async (id: number): Promise<Todo> => {
    const resp = await request.get(`/todos/${id}`);
    return plainToClass(Todo, resp);
};

export default {
    getTodo,
}
