import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { CommonModule, DatePipe } from '@angular/common';

import { MyEmployeesComponent } from './my-employees/my-employees.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { PopUpForImageComponent } from './pop-up-for-image/pop-up-for-image.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { SmartCardComponent } from './smart-card/smart-card.component';
import { AppRoutingModule } from './app-routing.module';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { MassgeToUserComponent } from './massge-to-user/massge-to-user.component';


@NgModule({
  declarations: [
    AppComponent,
    MyEmployeesComponent,
    PopUpComponent,
    PopUpForImageComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent,
    PopUpComponent,
    UpdateEmployeeComponent,
    PopUpForImageComponent,
    SmartCardComponent,
    SmartTableComponent,
    SmartCardComponent,
    SmartTableComponent,
    CreateEmployeeComponent,
    MassgeToUserComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    AutocompleteLibModule,
    AppRoutingModule,

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
