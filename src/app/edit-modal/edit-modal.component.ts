import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css'],
})
export class EditModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditModalComponent>,
    private service: MasterService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  inputdata: any;
  editData: any;

  onNoClick(): void {
    this.dialogRef.close();
  }

  myForm = this.fb.group({
    name: this.fb.control(''),
    email: this.fb.control(''),
    phone: this.fb.control(''),
    status: this.fb.control(''),
  });

  Saveuser() {
    this.service.SaveCustomer(this.myForm.value).subscribe((res) => {
      this.onNoClick();
    });
  }

  setPopupData(code: any) {
    this.service.GetCustomerByCode(code).subscribe((item) => {
      this.editData = item;
      this.myForm.setValue({
        name: this.editData.name,
        email: this.editData.email,
        phone: this.editData.phone,
        status: this.editData.status,
      });
    });
  }

  ngOnInit(): void {
    this.inputdata = this.data;
    if (this.inputdata.code > 0) {
      this.setPopupData(this.inputdata.code);
    }
  }
}
