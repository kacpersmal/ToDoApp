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
                new ToDoList {Id =1, Label = "Day", items = new List<ToDoItem>{
                    new ToDoItem { Id = 1, finished=false, value = "Take out trash"}, new ToDoItem { Id = 2, finished=true, value = "Listen to podcasts"} 
                }
                }
            };
        }

        public ToDoItem AddItem(int listId, string itemValue)
        {
            var toDoList = lists.FirstOrDefault(lst => lst.Id == listId);
            int itemId = 0;
            if (toDoList.items.Count > 0)
            {
                itemId = toDoList.items.Last().Id + 1;
            }
            ToDoItem itemTmp = new ToDoItem { Id = itemId, finished = false, value = itemValue};
            toDoList.items.Add(itemTmp);
            return itemTmp;
        } 

        public ToDoList AddList(string name)
        {
            ToDoList list = new ToDoList { Label = name };
            list.Id = lists.Last().Id + 1;
            list.items = new List<ToDoItem>();
            lists.Add(list);
            return list;
        }

        public int commit()
        {
            return 0;
        }

        public ToDoItem DeleteItem(int listId, int itemId)
        {
            var toDoList = lists.FirstOrDefault(lst => lst.Id == listId);
            ToDoItem itemTmp = toDoList.items.FirstOrDefault(it => it.Id == itemId);
            toDoList.items.Remove(itemTmp);
            return itemTmp;
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

        public ToDoItem SetStatus(int listId, int itemId, bool status)
        {
            var toDoList = lists.FirstOrDefault(lst => lst.Id == listId);
            ToDoItem itemTmp = toDoList.items.FirstOrDefault(it => it.Id == itemId);
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
