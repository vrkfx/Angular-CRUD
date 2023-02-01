import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// RouterModules
import { Routes, RouterModule } from '@angular/router';

//Angular Material
//ng add @angular/material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';

//Flex Layout
import { FlexModule } from '@angular/flex-layout';
import { GridModule } from '@angular/flex-layout/grid';
// import { FlexLayoutModule } from '@angular/flex-layout/module';
// npm install @angular/flex-layout@latest
import { FlexLayoutModule } from "@angular/flex-layout";

//Components
import { AppComponent } from './app.component';

//Form Modules
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes=[
  //{ path:'', component:  },
  //Path Match Can be 'full' or prefix
  //{ path: '', redirectTo: '/todo', pathMatch: 'full' },
  // { path:'', component:  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //Material UI test
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    MatCardModule,
    //Router
    RouterModule.forRoot(routes),
    //Form
    FormsModule,
    ReactiveFormsModule,
    //layout
    FlexModule ,
    GridModule,
    FlexLayoutModule,
  ],
  //need to add Export for Router Module
  exports:[
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
