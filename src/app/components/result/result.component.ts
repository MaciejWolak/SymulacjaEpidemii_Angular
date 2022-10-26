import {Component, Input, OnInit} from '@angular/core';
import {ResultsService} from "../../service/results.service";
import {Results} from "../../model/results";
import * as path from "path";
import * as url from "url";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {



  constructor(private resultsService: ResultsService,
              private route: ActivatedRoute) { }

  resultList : Results[] = [];


  ngOnInit(): void {
    const id= this.route.snapshot.params['id'];

      this.resultsService.getResult(id).subscribe((results) =>{
        this.resultList = results;

    })
  }


}
