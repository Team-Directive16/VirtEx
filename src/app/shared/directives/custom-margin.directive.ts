import { Directive, ElementRef, Input, Renderer } from '@angular/core';

const DEFAULT_MARGIN = '5px';
@Directive({
  selector: '[customMargin]'
})
export class CustomMarginDirective {
  private _margin: string;
  public element: ElementRef;

  constructor(element: ElementRef) {
    this.element = element;
    this.element.nativeElement.style.marginLeft = this._margin;
  }

  @Input('margin') set margin(value: string) {
    this._margin = value + "px" || DEFAULT_MARGIN;
  }
  get margin() {
    return this._margin || DEFAULT_MARGIN;
  }
}
