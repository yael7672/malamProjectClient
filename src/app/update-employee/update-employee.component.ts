import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../Interfaces/Employee';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AppService } from '../app.service';
import { PopUpServiceService } from '../pop-up.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  @Output() updateData = new EventEmitter<{ id: any; name: string; salary: number; dueDate: any; age: number; }>();
  @Input() employeeId: any
  @Input() dataArr: any
  @Input() specificItem: any
  isPopUpOpen: any
  ifShowSpinner!: boolean;
  isDisabled: any
  todayDate!: any;
  myDate = new Date()
  employeeAge: any
  employeeSalary: any
  employeeName: any
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
    console.log(this.specificItem[0]);
    this.specificItem = this.specificItem[0]
  }

  UpdateEmployee(form: NgForm) {
    debugger
    this.popUpService.setSpinner(true);
    this.isDisabled = true;
    // localStorage.setItem('employeeDetails', JSON.stringify({
    //   id: Math.floor(Math.random() * 100) + 1, name: form.value.Name,
    //   salary: form.value.Salary,
    //   dueDate: form.value.DueDate,
    //   age: form.value.Age
    // }));
    const employeeIndex = this.dataArr.findIndex((employee: any) => employee.id === this.employeeId);
    this.dataArr[employeeIndex] = {
      id: this.dataArr[employeeIndex].id,
      name: form.value.Name? form.value.Name : this.specificItem.name,
      salary: form.value.Salary ? form.value.Salary : this.specificItem.name,
      dueDate: form.value.DueDate ? form.value.DueDate : this.specificItem.DueDate,
      age: form.value.Age ? form.value.Age : this.specificItem.age
    }
    this.appService.setIsPopUpOpen(false);
    this.popUpService.setSpinner(false);
    this.popUpService.setClosePopUp();
  }
}
