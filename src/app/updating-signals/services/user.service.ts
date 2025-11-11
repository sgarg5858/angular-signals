import { inject, Injectable, signal } from '@angular/core';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  router = inject(Router);

  initialUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');

  #users = signal<User[]>(this.initialUsers);

  addNewUser(user: User) {
    const users = this.#users();
    user.id = users.length + 1;
    this.#users.set([...users, user]);

    this.updateLocalStorage();
  }

  updateUser(user: User) {
    this.#users.update((users) => {
      const index = users.findIndex((u) => u.id === user.id);
      if (index !== -1) {
        users[index] = { ...user };
      }
      return [...users];
    });
    this.updateLocalStorage();
    this.router.navigate(['/users']);
  }

  getUserById(id: number) {
    return this.#users().find((user) => user.id === id) as User;
  }
  getUsers() {
    return this.#users;
  }

  updateLocalStorage() {
    localStorage.removeItem('users');
    localStorage.setItem('users', JSON.stringify(this.#users()));
  }
}
