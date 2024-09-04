import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAnswerLetter]'
})
export class AnswerLetterDirective implements OnInit {
  @Input('appAnswerLetter') index: number = 0;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const letter = String.fromCharCode(65 + this.index);
    this.el.nativeElement.insertAdjacentText('afterbegin', `${letter}. `);
  }
}
