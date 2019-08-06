import { Component, OnInit, Input } from '@angular/core';
import { OpenAPIV3 } from 'openapi-types';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.less']
})
export class ResponsesComponent implements OnInit {

  @Input() responses: OpenAPIV3.ResponsesObject;

  displayedColumns: string[] = ['key', 'value'];

  getResponsesAsKeyValuePipe(): any[] {
    const responses = [];
    for (let field in this.responses) {
      responses.push({
        key: field,
        value: this.responses[field]
      })
    }

    return responses;
  }

  isEmptyObject(object: {}): boolean {
    return Object.keys(object).length === 0;
  }

  constructor() { }

  ngOnInit() {
  }

}
