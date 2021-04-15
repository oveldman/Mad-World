using System;
using Mad_World.Database.Tables;
using Microsoft.EntityFrameworkCore;

namespace Mad_World.Database
{
    public class MadWorldContext : DbContext
    {
        public DbSet<Resume> Resumes { get; set; }

        public MadWorldContext(DbContextOptions<MadWorldContext> options) : base(options)
        {
        }
    }
}
