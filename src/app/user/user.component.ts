import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { UserInterface } from './user.interface';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [],
})
export class UserComponent {
  @Input({ required: true }) name!: string;
  avatarUrl = input.required<string>();
  @Output() customSelect = new EventEmitter<UserInterface['name']>();

  onSelectUser() {
    this.customSelect.emit(this.name);
  }
}
