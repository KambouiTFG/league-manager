import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './search.pipe';
import { ImageSanitizerPipe } from './image-sanitizer.pipe';



@NgModule({
  declarations: [SearchPipe, ImageSanitizerPipe],
  imports: [
    CommonModule
  ],
  exports: [
    SearchPipe,
    ImageSanitizerPipe
  ]
})
export class PipesModule { }
