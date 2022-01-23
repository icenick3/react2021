import baseUrl from "../configs/baseUrl";

export const getAllUsers = () => {
    return fetch(`${baseUrl}/users`).then(value => value.json())
}