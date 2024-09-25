import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../rxjs.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-js-string',
  templateUrl: './js-string.component.html',
  styleUrls: ['./js-string.component.css'],
})
export class JsStringComponent implements OnInit {
  customers: any[] = [];
  constructor(private rxjsService: RxjsService) {}
  ngOnInit(): void {
    // this.rxjsService.getCustomers().subscribe((data) => {
    //   this.customers = data;
    //   console.log(this.customers);
    // });
  }
}
