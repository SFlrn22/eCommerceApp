using eCommerceApp_Backend.Models;
using eCommerceApp_Backend.Models.DTO;

namespace eCommerceApp_Backend.Interface
{
    public interface IProductRepository
    {
        ICollection<Product> GetProducts();
        Product GetProduct(int productId);
        Product GetProductByName(string productName);
        Product CompareProductsByName(ProductDTO product);
        bool ProductExists(int productId);
        bool ProductExists(string productName);
        bool CreateProduct(Product product);
        bool UpdateProduct(Product product);
        bool DeleteProduct(Product product);
        bool Save();
    }
}
