import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AddUserComponent } from "../../components/add-user/add-user.component";
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';
import { UserComponent } from '../../components/user/user.component';

@Component({
  selector: 'app-users',
  imports: [AddUserComponent, UserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class UsersComponent {
  userService = inject(UserService);
  router = inject(Router);
  users = this.userService.getUsers();

  addUser(user: User) {
    this.userService.addNewUser(user);
  }
  editUser(id: number) {
    console.log('Navigating to edit user with ID:', id);
    this.router.navigate(['/users/edit', id]);
  }

}
