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

        public ToDoItem AddItem(int listId, string item)
        {
            var toDoList = lists.FirstOrDefault(lst => lst.Id == listId);
            ToDoItem itemTmp = new ToDoItem { Id = toDoList.items.Count + 1, finished = false, value = item};
            toDoList.items.Add(itemTmp);
            return itemTmp;
        } 

        public ToDoList AddList(string name)
        {
            ToDoList list = new ToDoList { Label = name };
            list.Id = lists.Count + 1;
            list.items = new List<ToDoItem>();
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

        public ToDoItem SetStatus(int listId, int item, bool status)
        {
            var toDoList = lists.FirstOrDefault(lst => lst.Id == listId);
            ToDoItem itemTmp = toDoList.items.FirstOrDefault(it => it.Id == item);
            itemTmp.finished = status;
            return itemTmp;
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
