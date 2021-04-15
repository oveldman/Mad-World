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
        private string _connection;
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
            _connection = config["ConnectionStrings:MadWorldContext"];

            CreateShowCaseContext();
        }

        private void CreateShowCaseContext()
        {
            var optionsBuilder = new DbContextOptionsBuilder<MadWorldContext>();
            optionsBuilder.UseNpgsql(_connection);

            MadWorldContext context = new MadWorldContext(optionsBuilder.Options);
            Inserter = new(context);
        }
    }
}
