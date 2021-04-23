import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResume } from '../../../models/api/resume';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private basicResumeUrl: string =  "/api/resume";

  constructor(private http: HttpClient) { }

  getBasicInformation() : Observable<IResume> {
    return this.http.get<IResume>(this.basicResumeUrl);
  }
}
