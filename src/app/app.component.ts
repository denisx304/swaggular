import { Component, OnInit } from '@angular/core';
import SwaggerParser from "swagger-parser";

import { OpenAPI, OpenAPIV3 } from 'openapi-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  document: OpenAPI.Document;

  getPaths(tag: string): OpenAPIV3.PathsObject {
    const paths: OpenAPIV3.PathsObject = {};
    for (let path in this.document.paths) {
      let pathAdded = false;
      for (let operation in this.document.paths[path]) {
        if (this.document.paths[path][operation].tags.includes(tag)) {
          if (!pathAdded) {
            paths[path] = this.document.paths[path];
            pathAdded = true;
          }
        }
      }
    }
    return paths;
  }

  ngOnInit() {
    SwaggerParser.dereference("../assets/openapi.yaml")
      .then(swagger => {
        this.document = swagger;
      })
  }
}
