import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    MatExpansionModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  exports: [
    MatExpansionModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }
