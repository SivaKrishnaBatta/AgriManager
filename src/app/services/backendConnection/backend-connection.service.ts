import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BackendConnectionService {

  private baseUrl = 'https://localhost:4000/'; 

  constructor(private http: HttpClient) {}
  

  getapi(url:any): Observable<any> {
    return this.http.get(`${this.baseUrl}${url}`);
  }
  postapi(url: any,body:any): Observable<any> {
    return this.http.post(`${this.baseUrl}${url}`, body);
  }
  putapi(url: any,body:any): Observable<any> {
    return this.http.put(`${this.baseUrl}${url}`, body);
  }
  deleteapi(url: any,): Observable<any> {
    return this.http.delete(`${this.baseUrl}${url}`);
  }
}
