import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientFormComponent } from './Form/patient-form/patient-form.component';
import { PatientListComponent } from './List/patient-list/patient-list.component';


const routes: Routes = [
  { path: 'patients', component: PatientListComponent},
  { path: 'addPatient', component: PatientFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
