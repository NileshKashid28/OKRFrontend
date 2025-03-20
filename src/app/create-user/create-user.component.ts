import { Component } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  currentView: string = '';
  user: any = { username: '', email: '' };
  searchTerm: string = '';
  allUsers = [
    { username: 'john_doe', email: 'john@example.com' },
    { username: 'jane_doe', email: 'jane@example.com' },
  ];

  // Navigate to Create User
  goToCreateUser() {
    this.currentView = 'create';
  }

  // Navigate to Search User
  goToSearchUser() {
    this.currentView = 'search';
  }

  // Navigate to View All Users
  goToViewAllUsers() {
    this.currentView = 'view';
  }

  // Create User
  onSubmit() {
    this.allUsers.push({ ...this.user });
    alert('User Created Successfully!');
    this.user = { username: '', email: '' };
  }

  // Search User
  searchUser() {
    alert(`Searching for user: ${this.searchTerm}`);
  }
  
}
