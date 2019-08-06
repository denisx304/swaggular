import { Component, OnInit, Input } from '@angular/core';
import { OpenAPIV3 } from 'openapi-types';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less']
})
export class InfoComponent implements OnInit {

  @Input() info: OpenAPIV3.InfoObject;

  constructor() { }

  ngOnInit() {
  }

  getContactHref(): string {
    if (this.info.contact) {
      if (this.info.contact.email) {
        return `mailto:${this.info.contact.email}`;
      }
      return this.info.contact.url || null;
    }
    return null;
  }

}
