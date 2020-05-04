import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  @Input()
  subject;
  constructor() { }

  ngOnInit(): void {
  }

}
