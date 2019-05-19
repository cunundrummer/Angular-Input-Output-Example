import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() receivedFromParent: string;
  @Output() toParent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  sendToParent(value) {
    console.log('sending value to parent: ', value);
    this.toParent.emit(value);
  }

}
