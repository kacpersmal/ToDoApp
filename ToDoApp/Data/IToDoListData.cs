using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoApp.Models;

namespace ToDoApp.Data
{
    public interface IToDoListData
    {
        int commit();
        ToDoList GetListById(int id);
        List<ToDoList> GetAllLists();
        ToDoList AddList(string name);
        ToDoList RemoveList(int id);
        ToDoList UpdateList(ToDoList list);

        ToDoItem AddItem(int listId, string item);
        ToDoItem SetStatus(int listId, int item,bool status);


    }
}
