import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favLinks: string[] = ['https://education.launchcode.org', 'https://htmlpreview.github.io/?https://raw.githubusercontent.com/HackerPoet/Inspiration/master/Inspiration.htm'];
  constructor() { }

  ngOnInit() {
  }

}
