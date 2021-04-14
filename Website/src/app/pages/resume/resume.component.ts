import { Component, OnInit } from '@angular/core';
import { IResume, Resume } from 'src/app/models/api/resume';
import { ResumeService } from './../../services/api/resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  public resumeInfo: IResume =  new Resume();

  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.resumeInfo = this.resumeService.getBasicInformation();
  }

}
