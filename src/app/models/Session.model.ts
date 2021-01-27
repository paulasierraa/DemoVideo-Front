import { user } from './user.model';
/*Este modelo representa una sesión activa. Esta la utilizaremos para
guardar el usuario, una vez logueado correctamente, y el token de 
autentificación que necesitaremos en un futuro para hacer peticiones al
 backend.
*/
export class Session{
    public token:string;
    public user: user;

    constructor(token:string,user:user)
    {
        this.token=token;
        this.user=user;
    }
}