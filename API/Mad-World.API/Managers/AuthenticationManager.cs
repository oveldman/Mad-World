using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Mad_World.API.Managers.Interfaces;
using Mad_World.API.Models.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;

namespace Mad_World.API.Managers
{
    public class AuthenticationManager : IAuthenticationManager
    {
        private readonly string _issuer;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly SymmetricSecurityKey _securityKey;

        public AuthenticationManager(string issuer, string key, SignInManager<IdentityUser> signInManager)
        {
            _issuer = issuer;
            _securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
            _signInManager = signInManager;
        }

        public async Task<BearerModel> AuthenticateAsync(string username, string password)
        {
            var bearerModel = new BearerModel
            {
                Succes = false
            };

            var result = await _signInManager.PasswordSignInAsync(username, password, true, true);

            if (result.Succeeded)
            {
                var signinCredentials = new SigningCredentials(_securityKey, SecurityAlgorithms.HmacSha256);

                DateTime validUntil = DateTime.Now.AddMinutes(30);

                var tokenOptions = new JwtSecurityToken(
                    issuer: _issuer,
                    audience: _issuer,
                    claims: new List<Claim>() {
                        new Claim(ClaimTypes.Name, username),
                    },
                    expires: validUntil,
                    signingCredentials: signinCredentials
                );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);

                bearerModel.Succes = true;
                bearerModel.AccessToken = tokenString;
                bearerModel.Type = "Bearer";
                bearerModel.Username = username;
                bearerModel.Issued = DateTime.Now.ToString();
                bearerModel.Expires = validUntil.ToString();

                // Ticks  divide by 10000000 makes time in seconds. 
                bearerModel.ExpiresIn = ((validUntil.Ticks - DateTime.Now.Ticks) / 10000000).ToString();
            }
            else
            {
                bearerModel.ErrorMessage = "Username and/or password isn't correct.";
            }

            return bearerModel;
        }

        public string GetUsername(string bearerToken)
        {
            bearerToken = bearerToken.Replace("Bearer ", "", StringComparison.OrdinalIgnoreCase);

            var handler = new JwtSecurityTokenHandler();
            var validations = new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = _securityKey,
                ValidateIssuer = false,
                ValidateAudience = false
            };
            var claims = handler.ValidateToken(bearerToken, validations, out var tokenSecure);
            return claims.FindFirstValue(ClaimTypes.Name);
        }
    }
}
