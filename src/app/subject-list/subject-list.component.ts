import { Component, OnInit } from '@angular/core';
import { SUBJECTS } from '../../db/subjects'

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {
  
  subjects:any = SUBJECTS;
  constructor() { }

  ngOnInit(): void {
  }

}
