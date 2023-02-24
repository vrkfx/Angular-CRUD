import { Component, OnInit, Inject, Input, Output, EventEmitter, } from '@angular/core';
import { author } from '../../models/author.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private crudService: CrudService
  ) {}


  authorName = '';
  authorId = 0;

  author: author[] = [];

  @Output() submitEvent = new EventEmitter<author>();

  test(author :author ) {
    // this.submitEvent.emit({
    //   authorId: this.authorId,
    //   authorName: this.authorName,
    // });
    // this.authorName = '';
    // console.log(this.submitEvent)
    this.crudService.postAuthors(author).subscribe(() => {
      // this.crudService.getAllAuthors()
      //  .subscribe(data => {
      //     this.author = data;
      //   });
      alert('done');
    });
  }

ngOnInit(): void {

}


onNoClick(): void {
  this.dialogRef.close();
  console.log(this.data)
}

// closeDialog() {
//   this.dialogRef.close();
//   window.location.reload();
// }

}
