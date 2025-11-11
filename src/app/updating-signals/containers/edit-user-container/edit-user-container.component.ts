import { Component, inject, OnInit } from '@angular/core';
import { EditUserComponent } from "../../components/edit-user/edit-user.component";
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-edit-user-container',
  imports: [EditUserComponent],
  templateUrl: './edit-user-container.component.html',
  styleUrl: './edit-user-container.component.scss'
})
export class EditUserContainerComponent implements OnInit {
  route = inject(ActivatedRoute);
  userService = inject(UserService);

  userId = Number(this.route.snapshot.paramMap.get('id'));
  user = this.userService.getUserById(this.userId);

  ngOnInit(): void {
    if(!this.user) {
      console.error(`User with ID ${this.userId} not found.`);
    }
  }

  updateUser(updatedUser: User) {
    this.userService.updateUser(updatedUser);
  }
}
