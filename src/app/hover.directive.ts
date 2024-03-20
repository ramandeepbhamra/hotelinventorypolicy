import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[pbhinvHover]'
})
export class HoverDirective implements OnInit {

  @Input()
  color: string ='red';
  
  constructor(
    private element: ElementRef,

    @Inject(DOCUMENT)
    private document: Document,

    private renderer: Renderer2

  ) { 
    console.log(this.element);
    console.log(this.element.nativeElement);
  }
  
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.color;
    console.log('Rummy' + this.document.getElementsByClassName('form-control')[0].attributes);

    this.renderer.setAttribute(
      this.element.nativeElement,
      'placeholder',
      this.color
    )
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'green'
    )
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'white'
    )
  }
}
