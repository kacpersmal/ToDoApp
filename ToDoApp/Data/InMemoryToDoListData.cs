using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoApp.Models;

namespace ToDoApp.Data
{
    public class InMemoryToDoListData : IToDoListData
    {
        private List<ToDoList> lists;

        public InMemoryToDoListData()
        {
            lists = new List<ToDoList>
            {
                new ToDoList {Id =1, Label = "Testing", items = new List<ToDoItem>{
                    new ToDoItem { Id = 1, finished=false, value = "Learn ReactdawdadawdawdawafwsegfwergReactdawdadawdawdawafwsegfwergReactdawdadawdawdawafwsegfwerg ReactdawdadawdawdawafwsegfwergReactdawdadawdawdawafwsegfwergReactdawdadawdawdawafwsegfwerg Reactdawdadawdawdawafwsegfwerg"}, new ToDoItem { Id = 2, finished=true, value = "Learn .net"} 
                }
                },
                new ToDoList {Id =2, Label = "Testing", items = new List<ToDoItem>{
                    new ToDoItem { Id = 1, finished=true, value = "Learn React"}, new ToDoItem { Id = 2, finished=false, value = "Learn .net"}
                }
                }
            };
        }

        public ToDoList AddList(ToDoList list)
        {
            list.Id = lists.Count + 1;
            lists.Add(list);
            return list;
        }

        public int commit()
        {
            return 0;
        }

        public List<ToDoList> GetAllLists()
        {
            return lists;
        }

        public ToDoList GetListById(int id)
        {
            var list = lists.SingleOrDefault(td => td.Id == id);
            return list;
        }

        public ToDoList RemoveList(int id)
        {
            var list = lists.SingleOrDefault(td => td.Id == id);
            lists.Remove(list);
            return list;
        }

        public ToDoList UpdateList(ToDoList list)
        {
            var toDoList = lists.SingleOrDefault(tdl => tdl.Id == list.Id);
            if(toDoList != null)
            {
                toDoList.items = list.items;
                toDoList.Label = list.Label;
            }
            return toDoList;
        }
    }
}
