﻿using eCommerceApp_Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace eCommerceApp_Backend.Data
{
    public class DBContext : DbContext
    {
        public DBContext(DbContextOptions<DBContext> options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
    }
}
