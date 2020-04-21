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

        [HttpPost("DeleteList/{id}")]
        public ToDoList DeleteList(int id)
        {
            return toDoList.RemoveList(id);
        }

        [HttpPost("AddItem/{id}/{value}")]
        public ToDoItem NewList(int id, string value)
        {
            return toDoList.AddItem(id,value);
        }

        [HttpPost("SetStatus/{id}/{itemId}/{status}")]
        public ToDoItem SetStatus(int id, int itemId,bool status)
        {
            return toDoList.SetStatus(id, itemId,status);
        }

        [HttpPost("DeleteItem/{id}/{itemId}")]
        public ToDoItem DeleteItem(int id, int itemId)
        {
            return toDoList.DeleteItem(id, itemId);
        }

    }
}
