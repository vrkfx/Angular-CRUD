import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-author-dialog',
  templateUrl: './delete-author-dialog.component.html',
  styleUrls: ['./delete-author-dialog.component.css']
})
export class DeleteAuthorDialogComponent implements OnInit {

  ngOnInit(): void {

  }

  constructor(
    public dialogRef: MatDialogRef<DeleteAuthorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }

}
