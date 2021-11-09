import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Neat Fotos';
  image1 = 'https://i.inews.co.uk/content/uploads/2017/11/The-Room.jpg';
  image2 = 'https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/777588/top-18-most-common-angularjs-developer-mistakes-41f9ad303a51db70e4a5204e101e7414.png';
  image3 = 'https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg';

  constructor() { }

  ngOnInit() {
  }

}