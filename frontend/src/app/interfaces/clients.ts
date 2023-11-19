export interface Client {
    id:number
    rut_or_dni: string
    name: string
    last_name: string
    email: string
    points: number
}

export interface ResponseRegister{
    message: string
    status: number
}

export interface ClientEditResponse{
    status:number
    client:Client
}

export interface ClientShowResponse{
    clients: Client[]
}