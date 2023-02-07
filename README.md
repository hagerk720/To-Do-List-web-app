# To-Do List Web APP
### Features


https://user-images.githubusercontent.com/78926069/217376825-55b6a0d6-0e74-4b45-9795-cd155bdb193c.mp4


- you can save your work list inside your **Local storage** and its state(done or not)
- you can mark if you had done your task
- you can delete any task you want 

| Name | Functionality |
| ------------- | ------------- |
| createTask(task)  | appand new task in list  |
|  markTaskAsDone(e)  | mark task if it done |
|  deleteTask(e)  | delete task from local storage|
|  addToLocalStorage()  | add task list to local storage |
|  getFromLocalStorage()| get task from local storage() |
|  getColor() |generate random color for task  |
```javascript
class Task(){
	 constructor(id, content, isDone) {
    this.id = id;
    this.content = content;
    this.isDone = isDone;
  }
}
```
