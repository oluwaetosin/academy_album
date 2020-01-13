import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 name = 'Tosin Omotayo';
 tvShow = 'Suits';
academy = [
  {name: 'Tosin', image: 'small.jpg', complexion: 'black', hobbies: ['Suits','Arsenal']},
  {
    name: 'Zino', image: 'small.jpg', complexion: 'black', hobbies: ['Dancing']
  },
  { name : 'Sarah', image: 'small.jpg', complexion: 'yellow', hobbies: ['Singing']
},
{ name : 'Najeeb', image: 'small.jpg', complexion: 'yellow', hobbies: ['Singing']
},
{ name : 'Charlse', image: 'small.jpg', complexion: 'yellow', hobbies: ['Singing']
}
];

}

