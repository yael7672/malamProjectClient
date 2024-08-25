import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../Interfaces/Employee';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AppService } from '../app.service';
import { PopUpServiceService } from '../pop-up.service';
import { NgForm } from '@angular/forms';
import  swal from 'sweetalert';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})

export class DeleteEmployeeComponent implements OnInit {
  ifShowSpinner!: boolean;

  ifSortDown = true;
  showMassgeToUser = true;
  massgeUserHeader = "";
  massgeUserBody = "האם אתה בטוח שברצונך למחוק עובד זה?"
  massgeUserFooter = "";
  kindOfMassage = 'deleteEmployee';
  massageToUser = "";
  @Input() employeeId: any
  @Input() dataArr: any
  @Output() deleteData = new EventEmitter<{ id: any; name: string; salary: number; dueDate: any; age: number; }>();
  constructor(private appService: AppService, private popUpService: PopUpServiceService) {
    this.popUpService.getSpinner().subscribe(res => {
      this.ifShowSpinner = res;
    })
  }
  ngOnInit(): void {
  }

  clickYes() {
    debugger
    this.deleteEmployee()
  }

  clickNo(kindOfMassage: string) {
    this.showMassgeToUser = false;
    this.popUpService.setClosePopUp();
  }

  deleteEmployee() {
    debugger;
    this.dataArr = this.dataArr.filter((item: any) => item.id != this.employeeId);
    console.log(this.dataArr);
    this.appService.setIsPopUpOpen(false);
    this.popUpService.setSpinner(false);
    this.popUpService.setClosePopUp();
    this.showMassgeToUser = false
    swal("!הרשומה נמחקה בהצלחה ")
  }
}

