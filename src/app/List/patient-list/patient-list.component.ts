import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/patient';
import { PatientServiceService } from 'src/app/patient-service.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients : Patient[]=[];

  constructor( private patientServiceService : PatientServiceService){

  }
  ngOnInit() {
    this.patientServiceService.findAll().subscribe(data => {
      this.patients = data;
    });
  }
  onDeletePatient(id: number): void {
    this.patientServiceService.onDelete(id)
    .subscribe(()=>{
      this.patients=this.patients.filter
      (p=>p.id != id)
    });
  }
  

}
