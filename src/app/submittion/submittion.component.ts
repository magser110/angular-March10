import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface User {
  usernameInput: string;
  emailInput: string;
  passwordInput: string
}

@Component({
  selector: 'app-submittion',
  imports: [FormsModule],
  templateUrl: './submittion.component.html',
  styleUrl: './submittion.component.css'
})
export class SubmittionComponent {
usernameInput = ''
emailInput = '';
passwordInput = '';
users = []

userInfo: string[] =[this.usernameInput, this.emailInput, this.passwordInput];
showUserInfo: boolean = true;

addUserInfo(){
  this.userInfo.push(`your info ${this.userInfo.length}`)
}

//   userInput(usernameInput, emailInput, passwordInput){
//     this.users.push({usernameInput, emailInput,
//       passwordInput});

// console.log(this.users);




  }

// you have access to the user input now if you create an array of items can you display them to the page

