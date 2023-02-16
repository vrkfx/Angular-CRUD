import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

ngOnInit(): void {

}

constructor(
  public dialogRef: MatDialogRef<DialogBoxComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,
) {}

onNoClick(): void {
  this.dialogRef.close();
  console.log(this.data)
}

closeDialog() {
  this.dialogRef.close();
  window.location.reload();
}

}
