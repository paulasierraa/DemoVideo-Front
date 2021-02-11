import { user } from './user.model';
export class Events{
    id:number;
    nombre:string;
    portada:File;
    descripcion:string;
    host:user;
    valor:number;
    fecha_ini:Date;
    fecha_fin:Date;
}