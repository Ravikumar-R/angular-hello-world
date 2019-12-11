import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


// Meta data, decorator and has html and css (view)
@Component({
  // selector: 'app-good', ----> tag
  // selector: '.app-good', ---> class
  selector: '[app-good]', // --> attribute
  template: `<p>Good to be back</p>
  <p> Message from parent {{messageToChild}} </p>
  <div>World will turns into to your way</div>
  <button (click)="getMessageFromChild()">From child</button>
  <p> some details about me {{detailsInJSON | json}} <p>

  `,// --> inline html
  styles: [`
  div{
    color : blue;
  }
  `] // inline css
})

// type script, class and data
export class GoodComponent implements OnInit {
  @Input() messageToChild;
  @Output() childEvent = new EventEmitter();
  detailsInJSON = {
    "name": "ravi",
    "age": "just an number",
    "height": 5.6
  }
  constructor() { }
  ngOnInit() {
  }
  getMessageFromChild() {
    this.childEvent.emit('Thanks for the name !!')
  }
}
