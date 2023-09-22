# Carpeta DAO 

En esta carpeta irán los daos o repositorios de cada entidad.


## Ejemplo

- Para la entidad **User** se crea el repositorio **UserRepository** que extiende de **JpaRepository** y se le pasa como parámetros la entidad y el tipo de dato de la llave primaria.


```
public interface UserRepository extends JpaRepository<User, Long> {
}
```
- En caso de que quieras crear un método personalizado, puedes hacerlo de la siguiente manera:

```
public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT u FROM User u WHERE u.username = :username")
    User findByUsername(@Param("username") String username);
}
```
