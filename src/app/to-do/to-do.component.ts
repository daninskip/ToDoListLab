import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IToDoTask } from './Interfaces/to-do-task';


@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
  toDoList : IToDoTask[] = [
    {name: "Clean Oven", complete: false},
    {name: "Feed Dog", complete: true},
    {name: "Grocery Shopping", complete: false},
    {name: "Take Shower", complete: true}
  ]

  toDoListComplete:boolean = false;

completeTask(taskName:string):void{
let objIndex = this.toDoList.findIndex((obj => obj.name == taskName));
this.toDoList[objIndex].complete = true
}

addTask(form:NgForm){
  let newTaskName = form.form.value.taskName;
  if (newTaskName !== ""){
  let newTask : IToDoTask = {name: newTaskName, complete: false}
  this.toDoList.push(newTask)
  }
}

removeTask(taskName:String):void{
  let objIndex = this.toDoList.findIndex((obj => obj.name == taskName));
this.toDoList.splice(objIndex, 1)
}


}