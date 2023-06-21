import { Component } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  listTask: Task[] = [];

  nameTask = '';

  addTask(){
    //Crear obj de tarea
    const task: Task = {
      name: this.nameTask,
      status: false
    }

    //Agregar la tarea al array
    this.listTask.push(task);

    //Reset input
    this.nameTask = ''
  }

  deleteTask(i: number){
    this.listTask.splice(i, 1);
  }

  completeTask(task: Task, i: number): void{
    console.log(`Intial Status: ${this.listTask[i].status}`)
    
    this.listTask[i].status = !task.status

    console.log(`Finish Status: ${this.listTask[i].status}`)
  }

}
