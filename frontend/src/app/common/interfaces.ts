export interface Usuario {
    id: number,
    name: string,
    lastname: string,
    nick: string,
    email: string,
    password: string,
    type: UserType
}

export enum UserType {
    ADMIN = "admin",
    USER = "user",
    LOGYSTIC = "logystic"
}