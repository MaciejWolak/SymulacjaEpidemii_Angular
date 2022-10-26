import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Parameters} from "../model/parameters";
import {resultsUrl} from "../config/api";
import {Results} from "../model/results";


@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private http: HttpClient) { }

  getResult(id: number):Observable<Results>{
    return this.http.get<Results>(resultsUrl + '/' + id);
  }
}
