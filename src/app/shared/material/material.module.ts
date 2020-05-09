import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldModule, MatIconModule, MatDatepickerModule,
  MatTableModule,
  MatNativeDateModule
  , MatInputModule
  , MatSelectModule
  , MatRadioModule
} from '@angular/material';
import { ToastrModule } from 'ng6-toastr-notifications';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatFormFieldModule, MatIconModule,
    MatDatepickerModule,
    MatTableModule,
    MatNativeDateModule
    , MatInputModule
    , MatSelectModule
    , ToastrModule.forRoot()
    , MatRadioModule
  ], exports: [
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    MatTableModule,
    MatNativeDateModule
    , MatInputModule
    , MatSelectModule
    , MatRadioModule
  ]
})
export class MaterialModule { }
