import { Component, Input } from '@angular/core';

@Component({
  selector: 'bi-bible-part-card',
  templateUrl: './biblePartCard.component.html',
  styleUrls: ['./biblePartCard.component.scss'],
})
export class BiblePartCardComponent {
  @Input() biblePart: any| undefined;
}
