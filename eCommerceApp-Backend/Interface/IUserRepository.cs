using eCommerceApp_Backend.Models;

namespace eCommerceApp_Backend.Interface
{
    public interface IUserRepository
    {
        ICollection<User> GetUsers();
        User GetUser(int id);
        User GetUser(string username);
        bool UserExists(int userId);
        bool UserExists(string username);
        bool CreateUser(User user);
        bool UpdateUser(User user);
        bool DeleteUser(User user);
        bool Save();
    }
}
