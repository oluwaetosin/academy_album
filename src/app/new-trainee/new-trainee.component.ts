import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITrainee } from './../models';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { TraineeService } from './../service/trainee.service';

@Component({
  selector: 'app-new-trainee',
  templateUrl: './new-trainee.component.html',
  styleUrls: ['./new-trainee.component.css']
})
export class NewTraineeComponent implements OnInit {
  traineeForm: FormGroup;
  complexions = ['Black', 'Yellow', 'Chocolate', 'White'];
  genders = ['Male', 'Female', 'Others'];

  constructor(private fb: FormBuilder,
              private traineeServ: TraineeService
              ) {
      this.traineeForm = this.fb.group({
        name: ['', Validators.required],
        complexion: ['', Validators.required],
        hobbies: [''],
        gender: [''],
        dateofbirth: [''],
        almamata: [''],
        discipline: [''],
        email: ['', Validators.email],
        telephone: ['', Validators.required],
        about: ['']

      });
   }

  ngOnInit() {
  }



  addTrainee(form: FormGroup) {
    console.log(form.value);
    const formData = form.value;
    if (formData.hobbies) {
      formData.hobbies = formData.hobbies.split(',');
    }
    const newFormData: ITrainee = formData;
    // this.traineeServ.addTrainee(newFormData);
    this.traineeServ.addTrainee(newFormData);
    // .subscribe(
    //   (response) => {
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.log(error);
    //   },
    //   () => {

    //   });
    form.reset();

  }

}
