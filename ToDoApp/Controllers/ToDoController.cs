using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ToDoApp.Data;
using ToDoApp.Models;


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
