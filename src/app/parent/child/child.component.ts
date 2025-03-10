import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {
data = input()

ngOnInit() {
 console.log(this.data());

}
}
