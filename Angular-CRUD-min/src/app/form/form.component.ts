import { CrudService } from './../services/crud.service';
import { author } from './../models/author.model';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  // @Input() authorName: string = ''
  // @Output() newAuthor  = new EventEmitter<{authorName:string}>

  // init interface model
  authors: author[] = [];

  constructor(private crudSrevice: CrudService, public dialog: MatDialog) {}
  openDialog(){
    this.dialog.open(DialogBoxComponent,{
      width:'250px',
      data:"right click"
    })
  }

  //On Initialised invokes once when directive is instantiated
  ngOnInit(): void {
    this.displayAllAuthors();
  }

  displayAllAuthors() {
    // this.authors.push()
    //Using the service script and the subscirbe method from the observal pattern for data transfer
    this.crudSrevice.getAllAuthors().subscribe({
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
    this.crudSrevice.deleteAuthor(id).subscribe(() => {
      // this.crudSrevice.getAllAuthors() ;
      alert('Author ' + id + 'Has been Deleted !!');
      window.location.reload();
    });
  }
}
