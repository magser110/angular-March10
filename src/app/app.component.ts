import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { CounterComponent } from './counter/counter.component';
import { ConditionalMessageComponent } from './conditional-message/conditional-message.component';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ToggleButtonComponent, InputFieldComponent,
   CounterComponent, ConditionalMessageComponent, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-project-310';
}
