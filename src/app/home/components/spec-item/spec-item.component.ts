import { Component, Input } from '@angular/core';

@Component({
  selector: 'spec-item',
  templateUrl: './spec-item.component.html',
  styleUrls: ['./spec-item.component.scss'],
})
export class SpecItemComponent {
  @Input() desc: string = '';
  @Input() icon: string = '';
}
