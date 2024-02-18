import { Component } from '@angular/core';
import { Patient } from 'src/app/patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientServiceService } from 'src/app/patient-service.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent {

  patient: Patient;
patientForm: any;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private patientServiceService: PatientServiceService) {
    this.patient = new Patient();
  }

  onSubmit() {
    this.patientServiceService.save(this.patient).subscribe(result => this.gotoPatientList());
  }

  gotoPatientList() {
    this.router.navigate(['/patients']);
  }

}
