import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { MasterService } from '../master.service';
import { Customer } from '../Modal/Customer';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  // data: any[] = [];

  // constructor(private dataService: DataService, public dialog: MatDialog) {}

  // ngOnInit(): void {
  //   this.data = this.dataService.getData();
  // }

  // openEditModal(item: any): void {
  //   const dialogRef = this.dialog.open(EditModalComponent, {
  //     width: '300px',
  //     data: { ...item },
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       this.dataService.updateData(result);
  //       this.data = this.dataService.getData(); // Refresh the data
  //     }
  //   });
  // }
  customerList!: Customer[];
  dataSource: any;
  displayedColumns: string[] = [
    'code',
    'name',
    'email',
    'phone',
    'status',
    'action',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private masterService: MasterService, public dialog: MatDialog) {
    this.loadCustomer();
  }

  loadCustomer() {
    this.masterService.GetCustomer().subscribe((res) => {
      this.customerList = res;
      this.dataSource = new MatTableDataSource<Customer>(this.customerList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  editCustomer(code: any) {
    this.OpenPopup(code, 'edit customer');
    console.log(code);
  }

  addCustomer() {
    this.OpenPopup(0, 'add customer');
  }

  OpenPopup(code: any, title: any) {
    const dialogRef = this.dialog.open(EditModalComponent, {
      width: '60%',
      data: {
        title: title,
        code: code,
      },
    });
    dialogRef.afterClosed().subscribe((item) => {
      this.loadCustomer();
    });

    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result) {
    //     this.dataService.updateData(result);
    //     this.data = this.dataService.getData(); // Refresh the data
    //   }
    // });
  }
  ngOnInit(): void {}
}
