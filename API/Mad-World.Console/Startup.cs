using System;
using System.IO;
using Mad_World.Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Mad_World.Console
{
    public sealed class Startup
    {
        private const bool Development = true;
        private static Startup _startup;
        private string _contectionAuthentication;
        private string _connectionMadWorld;
        public DataInserter Inserter { get; private set; }
        private Startup() { }
        public static Startup Create()
        {
            if (_startup == null)
            {
                _startup = new Startup();
            }

            return _startup;
        }

        public void Load()
        {
            string setting = "appsettings.json";

            if (Development)
            {
                setting = "appsettings.Development.json";
            }

            var builder = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(AppContext.BaseDirectory + "../../../../Mad-World.API"))
                .AddJsonFile(setting, true, true)
                .AddEnvironmentVariables();

            var config = builder.Build();
            _contectionAuthentication = config["ConnectionStrings:AuthenticationContext"];
            _connectionMadWorld = config["ConnectionStrings:MadWorldContext"];

            CreateMadWorldContext();
        }

        private void CreateMadWorldContext()
        {
            var optionsBuilder = new DbContextOptionsBuilder<MadWorldContext>();
            optionsBuilder.UseNpgsql(_connectionMadWorld);

            MadWorldContext context = new MadWorldContext(optionsBuilder.Options);

            var optionsBuilderAuthentication = new DbContextOptionsBuilder<AuthenticationContext>();
            optionsBuilder.UseNpgsql(_contectionAuthentication);

            AuthenticationContext contextAuthentication = new AuthenticationContext(optionsBuilderAuthentication.Options);

            Inserter = new(contextAuthentication, context);
        }
    }
}
