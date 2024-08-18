import { Component, input, Input } from '@angular/core';
import { TaskInterface } from './task.interface';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<TaskInterface>();
}
