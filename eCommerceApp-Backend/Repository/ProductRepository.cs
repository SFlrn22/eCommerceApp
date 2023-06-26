using eCommerceApp_Backend.Data;
using eCommerceApp_Backend.Interface;
using eCommerceApp_Backend.Models;

namespace eCommerceApp_Backend.Repository
{
    public class ProductRepository : IProductRepository
    {
        private readonly DBContext _context;
        public ProductRepository(DBContext context)
        {
            _context = context;
        }
        public ICollection<Product> GetProducts()
        {
            return _context.Products.OrderBy(p => p.Id).ToList();
        }
        public Product GetProduct(int productId)
        {
            return _context.Products.Where(p => p.Id == productId).FirstOrDefault();
        }
        public Product GetProductByName(string productName)
        {
            return _context.Products.Where(p => p.Name == productName).FirstOrDefault();
        }
        public Product CompareProductsByName(Product product)
        {
            return GetProducts().Where(p => p.Name.Trim().ToUpper() == product.Name.Trim().ToUpper())
                .FirstOrDefault();
        }
        public bool ProductExists(int productId)
        {
            return _context.Products.Any(p => p.Id == productId);
        }
        public bool ProductExists(string productName)
        {
            return _context.Products.Any(p => p.Name == productName);
        }
        public bool CreateProduct(Product product)
        {
            _context.Add(product);
            return Save();
        }
        public bool UpdateProduct(Product product)
        {
            _context.Update(product);
            return Save();
        }
        public bool DeleteProduct(Product product)
        {
            _context.Remove(product);
            return Save();
        }
        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }
    }
}
