import { author } from './../models/author.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-add-author-display',
  templateUrl: './add-author-display.component.html',
  styleUrls: ['./add-author-display.component.css'],
})
export class AddAuthorDisplayComponent {
  // value=''
  author: author[] = [];

  constructor(private crudService: CrudService, private router: Router) {}

  // handleSubmit(value: string){
  //   console.log(value);
  // }

  handleSubmit(author: author) {
    this.crudService.postAuthors(author).subscribe(() => {
      // this.crudService.getAllAuthors()
      //  .subscribe(data => {
      //     this.author = data;
      //   });
      alert('Author ' + author.authorName + ' Has been added to Authors');
      this.router.navigate(['/author']);
    });
  }
}
