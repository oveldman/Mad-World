using System;
using System.Linq;
using Mad_World.Database.Queries.Interfaces;
using Mad_World.Database.Tables;

namespace Mad_World.Database.Queries
{
    public class ResumeQuery : IResumeQuery
    {
        MadWorldContext _context;

        public ResumeQuery(MadWorldContext context)
        {
            _context = context;
        }

        public Resume GetLastResumeInfo()
        {
            return _context.Resumes.OrderBy(r => r.Created).LastOrDefault();
        }
    }
}
