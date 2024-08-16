import { Component, computed, output, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { faker } from '@faker-js/faker';
import { ContentComponent } from './content/content.component';
import { User } from './user/user.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users = computed<User[]>(() => this.getUsers(10));
  selectedUser = signal<User>({ avatarUrl: '', id: '', name: '' });

  onSelectUser(name: string) {
    const user = this.users().find((user) => user.name === name);
    if (user) {
      this.selectedUser.set(user);
    }
  }
  private getUsers(
    limit: number,
  ): { id: string; name: string; avatarUrl: string }[] {
    const users = [];
    while (limit !== 0) {
      users.push(this.getUser());
      limit--;
    }
    return users;
  }
  private getUser(): User {
    return {
      id: crypto.randomUUID(),
      name: faker.person.fullName(),
      avatarUrl: faker.image.avatar(),
    };
  }

  protected readonly event = event;
}
