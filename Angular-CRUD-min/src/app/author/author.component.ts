import { Component,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  @Input() authorName: string=''

  @Output() submitEvent = new EventEmitter<string>();


constructor(){ }

  create(){
    this.submitEvent.emit(this.authorName);
  }
}
