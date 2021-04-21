using System;
using Mad_World.Database;
using Mad_World.Database.Tables;
using Microsoft.AspNetCore.Identity;

namespace Mad_World.Console
{
    public class DataInserter
    {
        private MadWorldContext _madworldContext;
        private AuthenticationContext _authenticationContext;

        public DataInserter(AuthenticationContext authenticationContext, MadWorldContext context)
        {
            _authenticationContext = authenticationContext;
            _madworldContext = context;
        }

        public void Insert()
        {
            //AddResume();
        }

        private void AddResume()
        {
            _madworldContext.Add(new Resume
            {
                Name = "Oscar Veldman",
                Created = DateTime.Now
            });

            _madworldContext.SaveChanges();
        }
    }
}
