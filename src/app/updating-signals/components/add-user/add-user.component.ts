import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddUserComponent {
  userForm = new FormGroup({
    name: new FormControl('User'),
    email: new FormControl('user@gmail.com'),
    phone: new FormControl('12345678890',[Validators.minLength(10), Validators.maxLength(10)]),
    country: new FormControl('UK'),
  });

  add = output<User>();

  addUser(){
    this.add.emit(this.userForm.value as User);
  }
}
