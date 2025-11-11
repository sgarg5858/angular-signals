import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
 user = input.required<User>();
 editUser = output<number>();
}
