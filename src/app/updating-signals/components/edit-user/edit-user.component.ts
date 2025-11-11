import { Component, effect, input, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-edit-user',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss',
})
export class EditUserComponent {
  userDetails = input.required<User>();
  update = output<User>();


  userForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl('', [
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    country: new FormControl(''),
  });


  constructor() {
    effect(() => {
      const user = this.userDetails();
      this.fillForm(user);
    });
  }

  fillForm(user: User) {
    this.userForm.setValue({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      country: user.country,
    });
  }
  editUser() {
    this.update.emit(this.userForm.value as User);
  }
}
