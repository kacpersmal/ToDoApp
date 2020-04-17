using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoApp.Models
{
    public class ToDoLIst
    {

        public int Id { get; set; }
        public String Label { get; set; }
        public List<ToDoItem> items { get; set; }

    }
}
