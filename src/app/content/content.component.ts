import { Component, input } from '@angular/core';
import { User } from '../user/user.interface';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  user = input.required<User>();
}
