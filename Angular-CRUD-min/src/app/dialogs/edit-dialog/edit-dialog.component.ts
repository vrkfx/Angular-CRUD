import { Component, OnInit, Inject, Input, Output, EventEmitter, } from '@angular/core';
import { author } from '../../models/author.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit{

  ngOnInit(): void {}


  constructor(public dialogRef: MatDialogRef<EditDialogComponent>){}

  data: any = { };

  onUpdate(){
    console.log(this.data)
    console.log("Updated True")
    this.dialogRef.close(this.data);

  }

}
