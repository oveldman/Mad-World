using System;
using System.Linq;
using System.Threading.Tasks;
using Mad_World.API.Managers.Interfaces;
using Mad_World.API.Models;
using Mad_World.API.Models.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Mad_World.API.Controllers
{
    [ApiController]
    [Authorize]
    [Route("[controller]")]
    public class AuthenticationController : ControllerBase
    {
        private readonly ILogger<AuthenticationController> _logger;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IAuthenticationManager _authenticationManager;

        public AuthenticationController(ILogger<AuthenticationController> logger, UserManager<IdentityUser> userManager, IAuthenticationManager authenticationManager)
        {
            _logger = logger;
            _userManager = userManager;
            _authenticationManager = authenticationManager;
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("Login")]
        public async Task<BearerModel> LoginAsync(LoginModel loginRequest)
        {
            return await _authenticationManager.AuthenticateAsync(loginRequest.Username, loginRequest.Password);
        }

        [HttpGet]
        [Route("Test")]
        public string Test()
        {
            return "Succes";
        }

        /*
        [HttpGet]
        [AllowAnonymous]
        [Route("FirstTime")]
        public async Task<GeneralResponse> FirstTime()
        {
            var user = new IdentityUser()
            {
                Email = "test@test.nl",
                UserName = "test@test.nl",
                EmailConfirmed = true,
            };

            string password = "{-1NotMyRealPassword1-}";
            var result = await _userManager.CreateAsync(user, password);

            return new GeneralResponse()
            {
                Succes = true,
                Message = $"Password: '{password}'",
                ErrorMessages = result.Errors.Select(e => e.Description).ToList()
            };
        }

        */
    }
}
