using eCommerceApp_Backend.Interface;
using eCommerceApp_Backend.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace eCommerceApp_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : Controller
    {
        private readonly IProductRepository _productRepository;
        public ProductController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }
        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Product>))]
        public IActionResult GetProducts()
        {
            var products = _productRepository.GetProducts();
            return Ok(products);
        }
        [HttpGet("{productId}")]
        [ProducesResponseType(200, Type = typeof(Product))]
        [ProducesResponseType(404)]
        public IActionResult GetProduct(int id)
        {
            if (!_productRepository.ProductExists(id))
                return NotFound();

            var product = _productRepository.GetProduct(id);

            return Ok(product);
        }
        [HttpGet("{productName}")]
        [ProducesResponseType(200, Type = typeof(Product))]
        [ProducesResponseType(404)]
        public IActionResult GetProduct(string productName)
        {
            if (!_productRepository.ProductExists(productName))
                return NotFound();

            var product = _productRepository.GetProductByName(productName);

            return Ok(product);
        }
        [HttpPost]
        [ProducesResponseType(200)]
        [ProducesResponseType(422)]
        [ProducesResponseType(500)]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
        public IActionResult CreateProduct([FromBody] Product productToCreate)
        {
            if (productToCreate == null)
                return BadRequest();

            var returnedProduct = _productRepository.CompareProductsByName(productToCreate);

            if (returnedProduct != null)
            {
                ModelState.AddModelError("", "Product already exists");
                return StatusCode(422, ModelState);
            }

            if (!_productRepository.CreateProduct(productToCreate))
            {
                ModelState.AddModelError("", "Something went wrong while saving the product");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully created");
        }
        [HttpPut("{productId}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
        public IActionResult UpdateProduct(int productId, [FromBody] Product productUpdate)
        {
            if (productUpdate == null)
                return BadRequest();

            if (productId != productUpdate.Id)
                return BadRequest();

            if (!_productRepository.ProductExists(productId))
                return NotFound();

            var productToBeUpdated = _productRepository.GetProduct(productId);

            productToBeUpdated.Name = productUpdate.Name;
            productToBeUpdated.Description = productUpdate.Description;
            productToBeUpdated.Price = productUpdate.Price;
            productToBeUpdated.ImgLink = productUpdate.ImgLink;

            if (!_productRepository.UpdateProduct(productToBeUpdated))
            {
                ModelState.AddModelError("", "Something went wrong while updating the product");
                return StatusCode(500, ModelState);
            }

            return NoContent();
        }
        [HttpDelete("{productId}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
        public IActionResult DeleteProduct(int productId)
        {
            if (!_productRepository.ProductExists(productId))
                return NotFound();

            var productToBeDeleted = _productRepository.GetProduct(productId);

            if (!_productRepository.DeleteProduct(productToBeDeleted))
            {
                ModelState.AddModelError("", "Something went wrong while deleting the product");
                return StatusCode(500, ModelState);
            }

            return NoContent();
        }
    }
}
