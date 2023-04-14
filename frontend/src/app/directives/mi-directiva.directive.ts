import { Directive, ElementRef, Input, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[MiDirectiva]'
})
export class MiDirectivaDirective {

  constructor(
    public el: ElementRef,
    public renderer: Renderer2
  ) { }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'color', "red")
  }
}
