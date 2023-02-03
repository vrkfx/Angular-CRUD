import { author } from './../models/author.model';
import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-author-display',
  templateUrl: './add-author-display.component.html',
  styleUrls: ['./add-author-display.component.css']
})
export class AddAuthorDisplayComponent {

  value=''


constructor(){ }

handleSubmit(value: string){
  console.log(value);
  }

}
