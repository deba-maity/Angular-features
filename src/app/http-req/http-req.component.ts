import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-http-req',
  templateUrl: './http-req.component.html',
  styleUrls: ['./http-req.component.css']
})
export class HttpReqComponent  {

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Observable example
    const observable = new Observable(subscriber => {
      subscriber.next('Hello from Observable');
      subscriber.next('World from Observable');
      subscriber.complete();
    });

    observable.subscribe(console.log);

    // observable.subscribe({
    //   next: value => console.log(value),
    //   complete: () => console.log('Observable completed')
    // });


    // Promise example
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Hello from Promise');
      }, 5000);
    });

    promise.then(value => {
      console.log(value);
    })
    .catch(error => {
      console.error(error);
    });
  }

  // Method to demonstrate API requests
  demonstrateRequests(): void {
    // GET Request
    this.apiService.getData().subscribe(response => {
      console.log('GET Request Response:', response);
    });

    // POST Request
    this.apiService.postData({ title: 'New Post', body: 'New post body' }).subscribe(response => {
      console.log('POST Request Response:', response);
    });

    // PUT Request
    this.apiService.putData({ title: 'Updated Post', body: 'Updated post body' }).subscribe(response => {
      console.log('PUT Request Response:', response);
    });

    // DELETE Request
    this.apiService.deleteData().subscribe(response => {
      console.log('DELETE Request Response:', response);
    });

    // PATCH Request
    this.apiService.patchData({ title: 'Patched Post' }).subscribe(response => {
      console.log('PATCH Request Response:', response);
    });

    // HEAD Request
    this.apiService.headData().subscribe(response => {
      console.log('HEAD Request Response:', response);
    });
  }
}
