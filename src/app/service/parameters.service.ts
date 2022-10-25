import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {parametersUrl} from "../config/api";
import {Parameters} from '../model/parameters';
const HTTP_OPTIONS = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })};
@Injectable({
  providedIn: 'root'
})
export class ParametersService {


  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getParameters(): Observable<Parameters[]>{
    return this.http.get<Parameters[]>(parametersUrl)
  }

  addParameters(parameters: Parameters): Observable<Parameters> {
    return this.http.post<Parameters>(parametersUrl,parameters);
  }

  removeParameters(id: number): Observable<void>{
    return this.http.delete<void>(parametersUrl + '/' + id);
  }

  updateParameters(parameters:Parameters): Observable<Parameters>{
    return this.http.put<Parameters>(parametersUrl, parameters)
  }

  getParemeter(id: number):Observable<Parameters>{
    return this.http.get<Parameters>(parametersUrl + '/' + id);
  }


}
