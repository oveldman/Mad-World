using System;
using Mad_World.Business.Interfaces;
using Mad_World.Database.Queries.Interfaces;
using Mad_World.Database.Tables;

namespace Mad_World.Business
{
    public class ResumeManager : IResumeManager
    {
        IResumeQuery _resumeQuery;

        public ResumeManager(IResumeQuery resumeQuery)
        {
            _resumeQuery = resumeQuery;
        }

        public Resume GetResume()
        {
            return _resumeQuery.GetLastResumeInfo();
        }
    }
}
