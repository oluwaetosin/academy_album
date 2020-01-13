import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  name = 'Tosin Omotayo';
  tvShow = 'Suits';
  constructor() { }

  ngOnInit() {
  }

}
