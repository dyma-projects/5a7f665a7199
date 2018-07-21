import { Directive, HostBinding, HostListener } from '@angular/core';


export enum KEY_CODE {
  LEFT_ARROW = 37,
  UP_ARROW = 38,
  RIGHT_ARROW = 39,
  DOWN_ARROW = 40
}

@Directive({
  selector: '[appArrowBgColor]'
})
export class ArrowBgColorDirective {
  
  @HostBinding('style.backgroundColor') bgColor = 'transparent';
  
  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {

    if (event.keyCode >= KEY_CODE.LEFT_ARROW && event.keyCode <= KEY_CODE.DOWN_ARROW) {

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      console.log("F L");
      this.bgColor = '#E1CE9A';
    }
   
    if (event.keyCode === KEY_CODE.UP_ARROW) {
      console.log("F U");
      this.bgColor = '#AFAFAF';
    }

    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      console.log("F R");
      this.bgColor = '#0F9DE8';
    }    

    if (event.keyCode === KEY_CODE.DOWN_ARROW) {
      console.log("F D");
      this.bgColor = '#FAEA73';
    }
  }
  else
  {
    this.bgColor = 'transparent';
  }
  }

  constructor() { }

}
