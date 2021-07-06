import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NoteInterface} from '../shared/note-interface';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss']
})
export class NoteItemComponent implements OnInit {
  optionsShow = false;
  @Input() noteItem: NoteInterface;
  @Input() itemIndex: number;
  @Output() dellItemId: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteItem(): void {
    this.dellItemId.emit(this.itemIndex);
  }
}
