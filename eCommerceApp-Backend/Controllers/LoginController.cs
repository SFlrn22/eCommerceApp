using AutoMapper;
using eCommerceApp_Backend.Interface;
using eCommerceApp_Backend.Models.DTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace eCommerceApp_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : Controller
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        private readonly ILoginRepository _loginRepository;

        public LoginController(IUserRepository userRepository, IMapper mapper, ILoginRepository loginRepository)
        {
            _userRepository = userRepository;
            _mapper = mapper;
            _loginRepository = loginRepository;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login([FromBody] UserLoginDTO userCredentials)
        {
            if (userCredentials == null)
                return BadRequest(ModelState);

            var userExistent = _loginRepository.Authenticate(userCredentials);

            if (userExistent == null)
                return NotFound();

            var token = _loginRepository.Generate(userExistent);
            var returnedUser = _mapper.Map<UserDTO>(userExistent);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(new { User = returnedUser, Token = token });

        }

    }
}
