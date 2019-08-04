import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
    MatExpansionModule,
    MatTableModule
  ],
  exports: [
    MatExpansionModule,
    MatTableModule
  ]
})
export class MaterialModule { }
