import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-author-display',
  templateUrl: './add-author-display.component.html',
  styleUrls: ['./add-author-display.component.css']
})
export class AddAuthorDisplayComponent {

  @Input() authorName: string = ''
  @Output() newAuthor  = new EventEmitter<{authorName:string}>


constructor(){ }

  create(){
    console.log("This Button Works")
  }

}
