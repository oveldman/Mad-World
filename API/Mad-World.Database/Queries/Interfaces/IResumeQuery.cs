using System;
using Mad_World.Database.Tables;

namespace Mad_World.Database.Queries.Interfaces
{
    public interface IResumeQuery
    {
        Resume GetLastResumeInfo(); 
    }
}
