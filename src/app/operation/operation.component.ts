import { Component, OnInit, Input } from '@angular/core';
import { OpenAPIV3 } from 'openapi-types';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.less']
})
export class OperationComponent implements OnInit {

  @Input() path: string;
  @Input() operationName: string;
  @Input() operation: OpenAPIV3.OperationObject;

  constructor() { }

  ngOnInit() {
  }

}
