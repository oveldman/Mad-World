using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mad_World.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Mad_World.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ResumeController : ControllerBase
    {
        private readonly ILogger<ResumeController> _logger;

        public ResumeController(ILogger<ResumeController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public Resume Get()
        {
            return new Resume
            {
                Name = "Oscar Veldman"
            };
        }
    }
}
