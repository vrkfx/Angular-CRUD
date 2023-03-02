import { author } from './../../models/author.model';
import { Component, OnInit, Inject, Input, Output, EventEmitter, } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit{

  ngOnInit(): void {}


  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: author ){}

  // data: any = {

  // };

  onUpdate(){
    console.log(this.data)
    console.log("Updated True")
    this.dialogRef.close(this.data);

  }

}
