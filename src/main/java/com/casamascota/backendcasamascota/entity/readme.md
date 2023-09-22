# Carpeta Entity 

En esta carpeta irán las entidades que se utilizarán para la comunicación entre el frontend y el backend.

## Ejemplo

- Para la tabla **User**, se crea la entidad **User**.

```
@Entity
@Table(name = "user")
public class User{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String password;
    // getters and setters
}
```