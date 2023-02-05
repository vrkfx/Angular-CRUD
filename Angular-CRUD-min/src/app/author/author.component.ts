import { author } from './../models/author.model';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent implements OnInit {
  // @Input() authorName: string=''
  authorName = '';
  authorId = 0;

  @Output() submitEvent = new EventEmitter<author>();

  constructor() {}

  ngOnInit(): void {}

  create() {
    this.submitEvent.emit({
      authorId: this.authorId,
      authorName: this.authorName,
    });
    this.authorName = '';
  }
}
