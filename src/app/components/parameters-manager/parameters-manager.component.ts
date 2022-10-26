import {Component, Input, OnInit} from '@angular/core';
import {ParametersService} from "../../service/parameters.service";
import {Parameters} from "../../model/parameters";
import {NgForm} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {Results} from "../../model/results";

@Component({
  selector: 'app-parameters-manager',
  templateUrl: './parameters-manager.component.html',
  styleUrls: ['./parameters-manager.component.css']
})


export class ParametersManagerComponent implements OnInit {
  public parametersTable: Parameters[];
  public editParameters: Parameters;
  public deleteParameters: Parameters;




  constructor(private parametersService: ParametersService) { }


  ngOnInit(): void {
    this.getParameters();}
/* getParameters(): void{
    this.parametersService.getParameters().subscribe((response: Parameters[]) => {
      this.parametersTable = response;
      console.log(this.parametersTable);
    },
      (error: HttpErrorResponse)=>{
      alert(error.message)
      });
  }*/
  getParameters():void{
    this.parametersService.getParameters().subscribe(parameters=>{
      this.parametersTable = parameters;
      console.log(parameters);
    })
  }


  getParameter(id: number): void {
    this.parametersService.getParemeter(id).subscribe(parameters => console.log(parameters));
  }

  removeParameters(id: number): void {
    this.parametersService.removeParameters(id).subscribe(parameters => {
      this.parametersTable = this.parametersTable.filter(parameters => parameters.id !== id);
      location.reload()
    })
  }

  addParameters(addForm: NgForm): void {
    this.parametersService.addParameters(addForm.value).subscribe((response: Parameters) => {
        console.log(response);
        this.getParameters();
        addForm.reset();
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    )
  }

  updateParameters(parameters: Parameters): void {
    this.parametersService.updateParameters(parameters).subscribe(
      (response: Parameters) => {
      console.log(response);
       this.getParameters();
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      })
  }

  public onOpenModal(parameters: Parameters, mode: string|number): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addParametersModal');
    }
    if (mode === 'edit') {
      this.editParameters = parameters;
      button.setAttribute('data-target', '#updateParametersModal');
    }
    if (mode === 'delete') {
      this.deleteParameters = parameters;
      button.setAttribute('data-target', '#deleteParametersModal');
    }
    container.appendChild(button);
    button.click();
  }


}
