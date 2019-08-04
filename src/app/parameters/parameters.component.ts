import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { OpenAPIV3 } from 'openapi-types';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.less']
})
export class ParametersComponent implements OnInit {

  @Input() parameters: OpenAPIV3.ParameterObject[];
  displayedColumns: string[] = ['name', 'description'];

  constructor() { }

  ngOnInit() {
  }

}
