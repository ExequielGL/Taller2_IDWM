//Tipos de la respuesta que devolverá el backend en caso de ser satisfactoria.
export interface LoginResponse {
    token:string
    username:string
}

//Tipos de los datos que se enviarán en el Login Form
export interface LoginForm {
    username:string
    password:string
}
