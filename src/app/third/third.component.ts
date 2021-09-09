import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  
  title!:string;
  url!:string;
  thumbnailUrl!:string;

  constructor(private photoService:PhotosService,private router:Router) { }

  ngOnInit(): void {
    this.title=this.photoService.gettitle();
    this.url=this.photoService.geturl();
    this.thumbnailUrl=this.photoService.getthumbnailUrl();
  }
  GoToTask1(){
    this.router.navigate(['first']);
  }
  GoToTask2(){
    this.router.navigate(['second']);
  }
}
