import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ColorsBottomCard } from '../models/colorsBottomCard';

@Directive({
  selector: '[appCardBottomColor]',
})
export class CardBottomColorDirective implements OnInit {
  constructor(private el: ElementRef, private rend: Renderer2) {}

  @Input() publishedDate!: string;

  private date = 0;

  ngOnInit(): void {
    this.date = Date.parse(this.publishedDate);
    this.rend.setStyle(
      this.el.nativeElement,
      'backgroundColor',
      CardBottomColorDirective.color(this.date)
    );
  }

  private static days(countDay: number) {
    return 1000 * 60 * 60 * 24 * countDay;
  }

  private static color(date: number): string {
    const dateNow = Date.now();
    if (date > dateNow - CardBottomColorDirective.days(7)) {
      return ColorsBottomCard.blue;
    }
    if (date > dateNow - CardBottomColorDirective.days(30)) {
      return ColorsBottomCard.green;
    }
    if (date > dateNow - CardBottomColorDirective.days(180)) {
      return ColorsBottomCard.yellow;
    }
    return ColorsBottomCard.red;
  }
}
