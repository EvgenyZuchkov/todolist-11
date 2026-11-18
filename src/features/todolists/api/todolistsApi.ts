import {instance} from "@/common/instance/instance.ts";
import type {BaseResponse} from "@/common/types";


export const todolistsApi = {
    getTodolists() {
        return instance.get<BaseResponse<TodolistResource[]>>("/boards/my")
    },
    createTodolist(title: string) {
        return instance.post<BaseResponse<TodolistResource>>("/boards",
            {data: {type: 'boards', attributes: {title}}})
    },
    deleteTodolist(id: string) {
        return instance.delete(`/boards/${id}`)
    },
    changeTodolistTitle(id: string, title: string) {
        return instance.patch<BaseResponse<TodolistResource>>(`/boards/${id}`,
            {data: {type: 'boards', attributes: {title}}})
    }
}