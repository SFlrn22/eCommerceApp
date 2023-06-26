using eCommerceApp_Backend.Models;

namespace eCommerceApp_Backend.Interface
{
    public interface IProductRepository
    {
        ICollection<Product> GetProducts();
        Product GetProduct(int productId);
        Product GetProductByName(string productName);
        Product CompareProductsByName(Product product);
        bool ProductExists(int productId);
        bool ProductExists(string productName);
        bool CreateProduct(Product product);
        bool UpdateProduct(Product product);
        bool DeleteProduct(Product product);
        bool Save();
    }
}
