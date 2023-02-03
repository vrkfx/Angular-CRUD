import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAuthorDisplayComponent } from './add-author-display.component';

describe('AddAuthorDisplayComponent', () => {
  let component: AddAuthorDisplayComponent;
  let fixture: ComponentFixture<AddAuthorDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAuthorDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAuthorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
