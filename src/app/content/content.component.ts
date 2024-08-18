import { Component, computed, input } from '@angular/core';
import { UserInterface } from '../user/user.interface';
import { TaskComponent } from './task/task.component';
import { faker } from '@faker-js/faker';
import { TaskInterface } from './task/task.interface';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  user = input.required<UserInterface>();
  tasks = computed<TaskInterface[]>(() => this.getTasks(100));

  private getTasks(limit: number): TaskInterface[] {
    const tasks = [];
    while (limit !== 0) {
      tasks.push(this.createRandomTask());
      limit--;
    }
    return tasks;
  }

  private createRandomTask(): TaskInterface {
    return {
      id: crypto.randomUUID(),
      title: faker.word.sample({ length: 5 }),
      summary: faker.word.sample({ length: { min: 20, max: 100 } }),
      dueDate: faker.date.future(),
    };
  }
}
