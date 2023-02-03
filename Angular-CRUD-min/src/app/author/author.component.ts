import { Component,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  @Input() authorName: string = ''
  @Output() newAuthor  = new EventEmitter<{authorName:string}>


constructor(){ }

  create(){
    console.log("This Button Works")
  }
}
