import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [],
  imports: [
    MatExpansionModule,
    MatTableModule,
    MatSelectModule
  ],
  exports: [
    MatExpansionModule,
    MatTableModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
