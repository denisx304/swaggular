import { Component, OnInit, Input } from '@angular/core';
import { OpenAPIV3 } from 'openapi-types';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.less']
})
export class TagComponent implements OnInit {

  @Input() tag: OpenAPIV3.TagObject;

  constructor() { }

  ngOnInit() {
  }

}
