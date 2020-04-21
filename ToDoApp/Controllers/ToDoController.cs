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

        [HttpPost("NewList/{name}")]
        public ToDoList NewList(string name)
        {
            return toDoList.AddList(name);
        }

        [HttpPost("AddItem/{id}/{value}")]
        public ToDoItem NewList(int id, string value)
        {
            return toDoList.AddItem(id,value);
        }

        [HttpPost("SetStatus/{id}/{item}/{status}")]
        public ToDoItem SetStatus(int id, int item,bool status)
        {
            return toDoList.SetStatus(id, item,status);
        }

    }
}
