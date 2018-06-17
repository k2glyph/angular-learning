import { ConvertToSpaces } from './custompipes/ConvertToSpacesPipe';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    StarComponent,
    ConvertToSpaces
  ]
})
export class SharedModule { }
