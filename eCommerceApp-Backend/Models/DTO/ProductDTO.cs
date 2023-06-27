using Microsoft.EntityFrameworkCore;

namespace eCommerceApp_Backend.Models.DTO
{
    public class ProductDTO
    {
        public string? Name { get; set; }
        public string? Description { get; set; }
        [Precision(5, 2)]
        public decimal Price { get; set; }
        public string? ImgLink { get; set; }
    }
}
