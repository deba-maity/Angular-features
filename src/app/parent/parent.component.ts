import { Component } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  messageFromChild: string | undefined;

  receiveMessage(message: string) {
    this.messageFromChild = message;
  }

  constructor(private demoService: DemoService) {}

  sendData() {
    this.demoService.sendData('Hello from SenderComponent');
  }
}
