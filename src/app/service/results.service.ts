import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {resultsListUrl} from "../config/api";
import {Results} from "../model/results";


@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private http: HttpClient) { }

  getResult(id: number):Observable<Results[]>{
    return this.http.get<Results[]>(resultsListUrl + '/' + id);
  }
}
