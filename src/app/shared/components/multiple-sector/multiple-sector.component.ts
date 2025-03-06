import { Component, Input } from '@angular/core';
import { MultipleSelectorDTO } from './MultipleSelectorDTO';

@Component({
  selector: 'app-multiple-sector',
  imports: [],
  templateUrl: './multiple-sector.component.html',
  styleUrl: './multiple-sector.component.css'
})
export class MultipleSectorComponent {

  @Input({ required: true })
  selected!: MultipleSelectorDTO[];

  @Input({ required: true })
  nonSelected!: MultipleSelectorDTO[];

  select(element: MultipleSelectorDTO, index: number) {
    this.selected.push(element);
    this.nonSelected.splice(index, 1);
  }

  deselect(element: MultipleSelectorDTO, index: number) {
    this.nonSelected.push(element);
    this.selected.splice(index, 1);
  }

  selectAll() {
    this.selected.push(...this.nonSelected);
    this.nonSelected.length = 0;
  }
  deselectAll() {
    this.nonSelected.push(...this.selected);
    this.selected.length = 0;
  }


}
