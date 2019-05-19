import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  outputFromChild: string;
  inputForChild: string;

  constructor() { }

  ngOnInit() {
  }

  showOutputFromChild(event) {
    console.log('received from child component: ', event);
    this.outputFromChild = event;
  }

  sendToChild(senderVal: string) {
    this.inputForChild = senderVal;
  }

}
