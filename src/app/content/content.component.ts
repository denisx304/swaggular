import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent implements OnInit {

  mediaTypeContent: string;
  @Input() content: {};

  constructor() { }

  ngOnInit() {
    // this.mediaTypeContent = Object.keys(this.content)[0];
  }

}
