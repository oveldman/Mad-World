import { Injectable } from '@angular/core';
import { IResume, Resume } from '../../models/api/resume';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor() { }

  getBasicInformation() : IResume {
    let resume: Resume = {
      name: "Oscar Veldman"
    }
    
    return resume;
  }
}
