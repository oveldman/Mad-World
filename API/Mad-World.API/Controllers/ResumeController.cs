using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mad_World.API.Models;
using Mad_World.Business.Interfaces;
using Mad_World.Database.Tables;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Mad_World.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ResumeController : ControllerBase
    {
        private readonly ILogger<ResumeController> _logger;
        private readonly IResumeManager _resumeManager;

        public ResumeController(ILogger<ResumeController> logger, IResumeManager resumeManager)
        {
            _logger = logger;
            _resumeManager = resumeManager;
        }

        [HttpGet]
        public ResumeModel Get()
        {
            Resume resume = _resumeManager.GetResume();

            return new ResumeModel
            {
                Name = resume?.Name
            };
        }
    }
}
