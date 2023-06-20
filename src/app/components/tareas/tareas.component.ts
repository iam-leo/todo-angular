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

}
