import { Component, OnInit, Input } from '@angular/core';
import { OpenAPIV3 } from 'openapi-types';

@Component({
  selector: 'app-request-body',
  templateUrl: './request-body.component.html',
  styleUrls: ['./request-body.component.less']
})
export class RequestBodyComponent implements OnInit {

  mediaType: string;

  @Input() requestBody: OpenAPIV3.RequestBodyObject;

  constructor() { }

  ngOnInit() {
    this.mediaType = Object.keys(this.requestBody.content)[0];
  }

}
