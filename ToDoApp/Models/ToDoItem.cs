using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoApp.Models
{
    public class ToDoItem
    {
        public int Id { get; set; }
        [Required]
        public String value { get; set; }
        [Required]
        public ToDoFlags flag { get; set; }

    }
}
