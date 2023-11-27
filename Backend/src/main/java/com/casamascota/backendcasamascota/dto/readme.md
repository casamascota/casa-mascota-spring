# Carpeta DTO (Data transfer objects)

En esta carpeta irán los DTOs que se utilizarán para la comunicación entre el frontend y el backend.


## Ejemplo

- Para la entidad User, se crea el DTO UserDTO o UserDto
- Los DTOs son simples POJOs (Plain Old Java Object) que contienen campos y getters y setters para esos campos.

```
public class UserDto{
    private String name;
    private String email;
    private String password;
    // getters and setters
}
```