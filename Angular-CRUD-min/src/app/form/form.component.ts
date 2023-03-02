import { EditDialogComponent } from './../dialogs/edit-dialog/edit-dialog.component';
import { CrudService } from './../services/crud.service';
import { author } from './../models/author.model';
import { MatTable } from '@angular/material/table';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialogs/dialog-box/dialog-box.component'
import { DeleteAuthorDialogComponent } from '../dialogs/delete-author-dialog/delete-author-dialog.component'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

  @ViewChild(MatTable) table!: MatTable<any>;
  // @Input() authorName: string = ''
   @Output() newAuthor  = new EventEmitter<author>

  // init interface model
  authors: author[] = [];
  showData : any;
  columnsToDisplay = ["authorId","authorName", "delete","edit"]

  //@Output() newAuthor = new EventEmitter<string>();

  constructor(private crudService: CrudService, public dialog: MatDialog) {}

  openDialog() : void{
    const dialogRef = this.dialog.open(DialogBoxComponent
      //,{
      // width:'300px',
      // data:{ name: '' },
   // }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.crudService.postAuthors(result).subscribe(response => {
          console.log(response);
          //location.reload();
          this.authors.push(response)
        //  this.table.dataSource.data.push(response)
          this.table.renderRows();

        });
      }
    });
  }

  //On Initialised invokes once when directive is instantiated
  ngOnInit(): void {
    this.displayAllAuthors();
  }

  displayAllAuthors() {
    // this.authors.push()
    //Using the service script and the subscirbe method from the observal pattern for data transfer
    this.crudService.getAllAuthors().subscribe({
      next: (authors) => {
        console.log(authors);
        this.authors = authors;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  deleteData(id: number) {
    this.crudService.deleteAuthor(id).subscribe(() => {
      // this.crudSrevice.getAllAuthors() ;
      // alert('Author ' + id + 'Has been Deleted !!');
      // window.location.reload();
      const dialogRef = this.dialog.open(DeleteAuthorDialogComponent, {
        width: '250px',
        data: {},
      });
      this.displayAllAuthors()
    });
  }

  editData(authorId:number, authorName:string){

    const dialogRef = this.dialog.open(EditDialogComponent,{
      data:{
        authorId:authorId,
        authorName:authorName,
      }
    });

    dialogRef.afterClosed().subscribe(result => {


      if (result) {
        this.crudService.updateAuthor(result).subscribe(response => {
          this.authors.push(response)
          this.displayAllAuthors()
          console.log(this.authors)
        });
      }
    });
    console.log("Edit Triggred for " + authorId + " Name " + authorName)
  }

}
