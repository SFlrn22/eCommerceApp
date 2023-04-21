using eCommerceApp_Backend.Models.DTO;
using eCommerceApp_Backend.Models;
using AutoMapper;

namespace eCommerceApp_Backend.Helper
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<User, UserDTO>();
            CreateMap<UserDTO, User>();
            CreateMap<UserCreateDTO, User>();
        }
    }
}
