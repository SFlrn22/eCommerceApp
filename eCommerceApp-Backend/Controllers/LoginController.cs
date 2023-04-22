using AutoMapper;
using eCommerceApp_Backend.Interface;
using eCommerceApp_Backend.Models.DTO;
using Microsoft.AspNetCore.Mvc;

namespace eCommerceApp_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : Controller
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public LoginController(IUserRepository userRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }

        [HttpPost]
        public IActionResult Login([FromBody] UserLoginDTO userCredentials)
        {
            if (userCredentials == null)
                return BadRequest(ModelState);

            var userExistent = _userRepository.GetUsers()
                .Where(ue => ue.UserName == userCredentials.UserName && ue.Password == userCredentials.Password)
                .FirstOrDefault();

            if (userExistent == null)
                return NotFound();

            var returnedUser = _mapper.Map<UserDTO>(userExistent);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(returnedUser);

        }

    }
}
