
# Carpeta BL (Business Logic)

En esta carpeta irán los services


## Ejemplo

- Para obtener los usuarios
- Los services usan DTOs, no entidades
```
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<UserDto> getAll(){
        List<UserDto> userDtos = new ArrayList<>();
        //luego agregaré un mapper que hará el siguiente código en un método:
        userRepository.findAll().forEach(user -> {
            UserDto userDto = new UserDto();
            userDto.setName(user.getName());
            userDto.setEmail(user.getEmail());
            userDto.setPassword(user.getPassword());
            userDtos.add(userDto);
        });
        return userDtos;
    }
}
```