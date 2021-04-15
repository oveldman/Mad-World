using System;
using Mad_World.Database;
using Mad_World.Database.Tables;

namespace Mad_World.Console
{
    public class DataInserter
    {
        private MadWorldContext _context;

        public DataInserter(MadWorldContext context)
        {
            _context = context;
        }

        public void Insert()
        {
            _context.Add(new Resume {
                Name = "Oscar Veldman",
                Created = DateTime.Now
            });

            _context.SaveChanges();
        }
    }
}
