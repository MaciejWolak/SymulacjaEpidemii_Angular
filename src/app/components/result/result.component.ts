import {Component, Input, OnInit} from '@angular/core';
import {ResultsService} from "../../service/results.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() parameters : Parameters<any> | undefined;

  constructor(private resultsService: ResultsService) { }

  ngOnInit(): void {
  }
  getResult(id: number){
    this.resultsService.getResult(id).subscribe(results => console.log(results))
  }

}
