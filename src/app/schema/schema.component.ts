import { Component, OnInit, Input } from '@angular/core';
import { OpenAPIV3 } from 'openapi-types';

@Component({
  selector: 'app-schema',
  templateUrl: './schema.component.html',
  styleUrls: ['./schema.component.less']
})
export class SchemaComponent implements OnInit {

  @Input() schema: OpenAPIV3.SchemaObject;
  @Input() expanded: boolean;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
