using eCommerceApp_Backend.Models.DTO;
using eCommerceApp_Backend.Models;

namespace eCommerceApp_Backend.Interface
{
    public interface ILoginRepository
    {
        string Generate(User user);
        User Authenticate(UserLoginDTO userLogin);
    }
}
