import {Component, Input, OnInit} from '@angular/core';
import {Results} from "../../../model/results";

@Component({
  selector: 'app-one-result',
  templateUrl: './one-result.component.html',
  styleUrls: ['./one-result.component.css']
})
export class OneResultComponent implements OnInit {

  @Input() result: Results;


  chart:any;

  constructor() { }

  ngOnInit(): void {
  }

}
