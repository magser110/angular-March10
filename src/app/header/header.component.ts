import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'welcome to angular';
  //description = 'this is a quick intro to angular components';
  inputText = '';

  resetInput() {
    this.inputText = '';
  }

  showMessage = false;
  toggleMessage() {
    this.showMessage = !this.showMessage;
  }

  changeHeader() {
    this.title = 'new header, yes?'
  }
}
