import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NoteInterface} from '../shared/note-interface';
import {NewNoteInterface} from '../shared/new-note-interface';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss']
})
export class NoteItemComponent {
  optionsShow = false;
  editMode = false;
  @Input() noteItem: NoteInterface;
  @Input() itemIndex: number;
  @Output() dellItemId: EventEmitter<number> = new EventEmitter<number>();
  @Output() updateItem: EventEmitter<NewNoteInterface> = new EventEmitter<NewNoteInterface>();

  constructor() {
  }

  deleteItem(): void {
    this.dellItemId.emit(this.itemIndex);
  }

  startEditMode(): void {
    this.editMode = true;
  }

  endEditMode(): void {
    if (this.noteItem.title.trim().length > 4 && this.noteItem.text.trim().length > 4) {
      this.editMode = false;
      const updatedItem: NewNoteInterface = {
        index: this.itemIndex,
        newItem: this.noteItem
      };
      this.updateItem.emit(updatedItem);
    }
  }
}
