using System;
using System.Threading.Tasks;
using Mad_World.API.Models.Authentication;

namespace Mad_World.API.Managers.Interfaces
{
    public interface IAuthenticationManager
    {
        Task<BearerModel> AuthenticateAsync(string username, string password);
    }
}
