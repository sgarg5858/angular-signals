import { Component, input, output } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
 user = input.required<User>();
 editUser = output<number>();
}
