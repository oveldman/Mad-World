namespace Mad_World.Console
{
    public class Program
    {
        static void Main(string[] args)
        {
            UseStartup();
        }

        private static void UseStartup()
        {
            Startup startup = Startup.Create();
            startup.Load();

            System.Console.WriteLine("Start: insert resume insert!");
            startup.Inserter.Insert();
            System.Console.WriteLine("Finished: insert resume insert!");
        }
    }
}
