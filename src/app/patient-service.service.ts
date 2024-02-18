import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './patient';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  private patientsUrl: string;

  constructor(private http: HttpClient) {
    this.patientsUrl = 'http://localhost:8088/patients';
  }
  public findAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientsUrl);
  }

  public save(patient: Patient) {
    return this.http.post<Patient>(this.patientsUrl, patient);
  }

  onDelete(id: number): Observable<any> {
    return this.http.delete(`${this.patientsUrl}/${id}`);
  }
 

}
