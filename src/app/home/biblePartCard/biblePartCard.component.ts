import { Component, Input } from '@angular/core';
import { BiblePartInterface } from '../types/biblePart.interface';

@Component({
  selector: 'bi-bible-part-card',
  templateUrl: './biblePartCard.component.html',
  styleUrls: ['./biblePartCard.component.scss'],
})
export class BiblePartCardComponent {
  @Input() biblePart!: BiblePartInterface;
}
