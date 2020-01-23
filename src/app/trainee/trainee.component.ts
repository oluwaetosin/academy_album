import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trainee',
  templateUrl: './trainee.component.html',
  styleUrls: ['./trainee.component.scss']
})
export class TraineeComponent implements OnInit {
  @Input() trainees;
  constructor() { }

  ngOnInit() {
  }

}
