import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { PopUpServiceService } from '../pop-up.service';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Employee } from '../Interfaces/Employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})

// thArrTableMyEmployees: any = ['Name', 'Salary', 'Due-date', 'Age'];


export class CreateEmployeeComponent implements OnInit {
  isPopUpOpen: any
  ifShowSpinner!: boolean;
  isDisabled: any
  todayDate!: any;
  myDate = new Date()
  employee!: any
  id: any
  name: any
  salary: any
  dueDate: any
  age: any 
  @Input() dataArr: Employee[] = []
  @Output() addData = new EventEmitter<{ id: any; name: string; salary: number; dueDate: any; age: number; }>();
  constructor(private router: Router, private datePipe: DatePipe, private appService: AppService, private popUpService: PopUpServiceService) {
    this.popUpService.getKindOfPopUp().subscribe(res => {
      this.isPopUpOpen = res;
    })
    this.popUpService.getSpinner().subscribe(res => {
      this.ifShowSpinner = res;
    })
    this.todayDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }
  ngOnInit(): void {

  }
  CreateEmployee(form: NgForm) {
    debugger
    this.popUpService.setSpinner(true);
    this.isDisabled = true;
    this.addData.emit({
      id: Math.floor(Math.random() * 100) + 1, name: form.value.Name,
      salary: form.value.Salary,
      dueDate: form.value.DueDate,
      age: form.value.Age
    });
    localStorage.setItem('employeeDetails', JSON.stringify({
      id: Math.floor(Math.random() * 100) + 1, name: form.value.Name,
      salary: form.value.Salary,
      dueDate: form.value.DueDate,
      age: form.value.Age
    }));

    this.appService.setIsPopUpOpen(false);
    this.popUpService.setSpinner(false);
    this.popUpService.setClosePopUp();
  }
}

