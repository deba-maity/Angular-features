import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  ];

  constructor() {}

  getData() {
    return this.data;
  }

  updateData(updatedItem: any) {
    const index = this.data.findIndex((item) => item.id === updatedItem.id);
    if (index !== -1) {
      this.data[index] = updatedItem;
    }
  }
}
