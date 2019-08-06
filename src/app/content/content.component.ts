import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent implements OnInit {

  @Input() content: {};
  defaultMediaType: string;

  constructor() { }

  ngOnInit() {
    this.defaultMediaType = Object.keys(this.content)[0];
  }

}
