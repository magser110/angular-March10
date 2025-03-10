import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional-message',
  imports: [],
  templateUrl: './conditional-message.component.html',
  styleUrl: './conditional-message.component.css'
})
export class ConditionalMessageComponent {
    message = 'im not sure if this is right tbh :/';
    showMessage = false;

    unveilMessage() {
      this.showMessage = !this.showMessage;
    }
}
