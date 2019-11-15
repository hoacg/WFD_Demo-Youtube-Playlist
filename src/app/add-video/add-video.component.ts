import { YoutubeService } from '../youtube.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

  isSuccess = false;

  constructor(private youtubeService: YoutubeService) { }

  videoForm: FormGroup;

  ngOnInit() {
    this.videoForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('')
    });
  }

  onSubmit() {
    const video = this.videoForm.value;
    this.youtubeService.addVideo(video).subscribe ( result => {
      this.isSuccess = true;
    });
  }
}
