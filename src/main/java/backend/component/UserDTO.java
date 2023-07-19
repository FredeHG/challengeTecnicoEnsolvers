package Backend.component;

import lombok.Data;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
public class UserDTO implements Serializable {
    int id;
    private String username;
    private String password;
    private List<Note> notes = new ArrayList<>();
    private Date accountCreationDate = new Date();

    //Segun la IA, el UserDTO es un POJO que se usa para transferir datos entre la aplicacion mientras que la clase
    //myPrincipal se usa para toodo lo relacionado con la sesion y demas, incluyendo ver si esta autenticado,los roles,etc
    //Se puede usar esta clase como principal si es que no necesitas esconder ningun dato de implementacion o alguna cosa del
    //modulo de seguridad. Pero me piden que tenga contrasenia y eso, pero el tema es que no es recomendado
    //Primero, pienso yo, por el hecho de que lo estas exponiendo al usarlo como objeto de transferencia, entonces es mejor
    //una class 'principal' que se ocupa de eso.
}