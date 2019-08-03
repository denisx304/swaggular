import { Component, OnInit } from '@angular/core';
import SwaggerParser from "swagger-parser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'swagger';

  ngOnInit() {
    SwaggerParser.dereference("../assets/openapi.yaml")
      .then(swagger => {
        console.log(swagger);
      })
  }
}
