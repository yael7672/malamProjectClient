import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyEmployeesComponent } from './my-employees/my-employees.component';

const routes: Routes = [
  { path: '', component: MyEmployeesComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
