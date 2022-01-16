import {baseUrl} from "../config/base.Url";


export const getUsers = () => {
    return fetch(`${baseUrl}/users`).then(value => value.json())
}

export const getPosts = (id) => {
    return fetch(`${baseUrl}/users/${id}/posts`).then(value => value.json())
}

