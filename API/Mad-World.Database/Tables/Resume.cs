using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Mad_World.Database.Tables
{
    public class Resume
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public Guid ID { get; set; }
        public DateTime Created { get; set; }
        public string Name { get; set; }
    }
}
