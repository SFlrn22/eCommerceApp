using AutoMapper;
using eCommerceApp_Backend.Models;
using eCommerceApp_Backend.Models.DTO;

namespace eCommerceApp_Backend.Helper
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<User, UserDTO>();
            CreateMap<UserDTO, User>();
            CreateMap<UserCreateDTO, User>();
            CreateMap<Product, ProductDTO>();
            CreateMap<ProductDTO, Product>();
        }
    }
}
