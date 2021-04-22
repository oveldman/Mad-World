using System;
using System.Collections.Generic;

namespace Mad_World.API.Models
{
    public class GeneralResponse
    {
        public bool Succes { get; set; }
        public string Message { get; set; }
        public List<string> ErrorMessages { get; set; } = new();
    }
}
