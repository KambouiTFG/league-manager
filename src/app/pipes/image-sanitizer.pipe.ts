import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'imageSanitizer'
})
export class ImageSanitizerPipe implements PipeTransform {
  constructor(private domSam: DomSanitizer){}

  transform(img: any): any {
    return img.lenght == 0 ? "../../assets/icon/404.png" : this.domSam.bypassSecurityTrustUrl(img);
  }

}
