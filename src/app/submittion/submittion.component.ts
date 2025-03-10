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


  userInput(usernameInput, emailInput, passwordInput){
    this.users.push({usernameInput, emailInput,
      passwordInput});

console.log(this.users);

  }

// you have access to the user input now if you create an array of items can you display them to the page


}
