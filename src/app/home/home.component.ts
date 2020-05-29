import { Component, OnInit } from '@angular/core';
import { TraineeService } from './../service/trainee.service';
import { ITrainee } from './../models';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // showAlbum = true;
  // isTemplateDriven = false;
activeTrainee: any;
  academy = [
    {name: 'Ruky', image: 'ruky.jpg', complexion: 'Black', hobbies: ['Singing', 'Coding', 'Driving']
  },
            {name: 'Zino', image: 'Zino.jpg', complexion: 'Fair', hobbies: ['Football', 'Singing', 'Reading']},
            {name: 'Najeeb', image: 'Najeem.jpg', complexion: 'Chocolate', hobbies: ['Swimming', 'Dancing', 'Playing Football', ]},
            {name: 'Sarah', image: 'Sarah.jpg', complexion: 'Dark', hobbies: ['Coding', 'Dancing', 'Eating']},
            {name: 'Charles', image: 'charles.jpg', complexion: 'Chocolate', hobbies: ['Coding', 'Dancing', 'Eating']}
];
constructor(private traineeServ: TraineeService) { }
trainees: ITrainee[] = [];
  ngOnInit() {
    this.trainees = this.traineeServ.getTrainees();
    $('#exampleModal').modal({show: true});
  }

traineeListener(trainee) {
  console.log(trainee);
  this.activeTrainee = trainee;
}


}
