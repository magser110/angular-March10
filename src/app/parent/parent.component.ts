import { Component, signal } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  standalone: true,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
parentData = signal('I am info from the parent component ')
}
