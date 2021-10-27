import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHoverstyle]'
})
export class HoverstyleDirective implements OnInit {
 @Input() txtDecorate: string;
 @Input() fontWeight: string;
  constructor(private elm: ElementRef) {
    this.txtDecorate = "";
    this.fontWeight = "";
  }

  ngOnInit(): void {
    // this.elm.nativeElement.style.textDecoration = this.txtDecorate;
    // this.elm.nativeElement.style.fontWeight = this.fontWeight;
  }

  @HostListener('mouseenter') onHover(){
    this.hoverMe(this.txtDecorate, this.fontWeight);
  }

  @HostListener('mouseleave') onHoverOff(){
    this.hoverMe("","");
  }

  private hoverMe(txtDecoration?: string, fntWeight?: string){
    this.elm.nativeElement.style.textDecoration = txtDecoration;
    this.elm.nativeElement.style.fontWeight = fntWeight;
  }
}
