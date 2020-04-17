using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ToDoApp.Data;
using ToDoApp.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ToDoApp
{
    [ApiController]
    [Route("[controller]")]
    public class ToDoController : Controller
    {
        private readonly IToDoListData toDoList;

        public ToDoController(IToDoListData toDoList)
        {
            this.toDoList = toDoList;
        }


        [HttpGet("ListAll")]
        public IEnumerable<ToDoList> ListAllToDoLists()
        {
            return toDoList.GetAllLists();
        }

     

    }
}
