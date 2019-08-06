import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { TagComponent } from './tag/tag.component';
import { InfoComponent } from './info/info.component';
import { OperationComponent } from './operation/operation.component';
import { ParametersComponent } from './parameters/parameters.component';
import { RequestBodyComponent } from './request-body/request-body.component';
import { SchemaComponent } from './schema/schema.component';
import { ResponsesComponent } from './responses/responses.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    TagComponent,
    InfoComponent,
    OperationComponent,
    ParametersComponent,
    RequestBodyComponent,
    SchemaComponent,
    ResponsesComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
