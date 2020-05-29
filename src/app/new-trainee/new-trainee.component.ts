import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITrainee } from './../models';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { TraineeService } from './../service/trainee.service';
import { FirebaseService } from '../firebase.service';

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
              private traineeServ: TraineeService,
              private firebase: FirebaseService
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

  fileUpload(files: FileList) {
    const file = files.item(0);

    if(file) {
      const storageRef = this.firebase.firebaseStorage.ref('img/' + file.name);
     const uploadTask = storageRef.put(file);

     uploadTask.on('state_changed', // or 'state_changed'
  function(snapshot) {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case this.firebase.firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case this.firebase.firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function(error) {

  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break;

    case 'storage/canceled':
      // User canceled the upload
      break;

    case 'storage/unknown':
      // Unknown error occurred, inspect error.serverResponse
     break;
  }
}, function() {
  // Upload completed successfully, now we can get the download URL
  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    console.log('File available at', downloadURL);
  });
});
    }
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
