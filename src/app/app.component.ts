import { Component, OnInit } from '@angular/core';
import SwaggerParser from "swagger-parser";

import { OpenAPI } from 'openapi-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  document: OpenAPI.Document;

  ngOnInit() {
    
    SwaggerParser.dereference("../assets/openapi.yaml")
      .then(swagger => {
        this.document = swagger;
      })
  }
}
