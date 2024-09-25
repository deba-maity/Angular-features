import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  receivedData = '';

  constructor(private demoService: DemoService) {}

  ngOnInit() {
    this.demoService.data$.subscribe(data => {
      this.receivedData = data;
    });
  }
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Hello from child!');
  }
}
