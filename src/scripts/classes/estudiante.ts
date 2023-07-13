export interface Data{
    message: string,
    data: Estudiante[]
}

export interface Estudiante{
    estudiante_id: number,
    estudiante_tipoIdentificacion: number,
    estudiante_numeroIdentificacion: number
    estudiante_nombres: string,
    estudiante_apellidos: string,
    estudiante_celular: string,
    estudiante_correo: string,
    estudiante_linkedin: string,
    estudiante_github: string,
    estudiante_estado: string,
    estudiante_fechaCreacion: string,
}

export interface Estado{
    estudiante_estado: string,
}