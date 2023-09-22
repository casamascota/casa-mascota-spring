
# Carpeta API

En esta carpeta irán los controllers

## Ejemplo

- Para el endpoint **api/v1/user**

```
@RestController
    public class UserApi{
    @Autowired
    private UserService userService;
    @GetMapping("/api/usuario")
    public ResponseDto<List<UserDto>> getAll(){
        ResponseDto<List<UserDto>> responseDto = new ResponseDto<>();
        responseDto.setData(userService.getAll());
        return responseDto;
       
    }
}
```