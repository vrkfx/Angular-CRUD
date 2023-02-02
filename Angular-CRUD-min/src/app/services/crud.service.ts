
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { author } from './../models/author.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  //ENVIRONMENT VARIABLE - NOT WORKING FOR NOW
  // baseApiUrl: string = environment.baseApiUrl;
   baseApiUrl: string = 'https://localhost:7132';

//Need inject Http Client Module
  constructor(private http: HttpClient) { }

  // Use Obesever to pass message/Data
  //return author[]
  //Getting All Authors
  getAllAuthors(): Observable<author[]>{
   return this.http.get<author[]>(this.baseApiUrl + '/api/Authors')
  }
}