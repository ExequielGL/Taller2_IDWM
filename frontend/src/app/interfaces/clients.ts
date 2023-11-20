//Tipo de datos que contendrá un cliente.
export interface Client {
    id:number
    rut_or_dni: string
    name: string
    last_name: string
    email: string
    points: number
}

//Tipo del fomrulario para crear un cliente
export interface CreateClientType {
    rut_or_dni: string
    name: string
    last_name: string
    email: string
    points: number
}

//Tipo de la respuesta luego de que se cree un cliente
export interface ResponseRegister{
    message: string
    status: number
}

//Tipo de la respuesta al solicitar un cliente a la API
export interface ClientEditResponse{
    status:number
    client:Client
}

//Tipo de la respuesta al solicitar los clientes a la API
export interface ClientShowResponse{
    clients: Client[]
}