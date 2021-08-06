import {Component, Input} from '@angular/core';
import {NoteInterface} from '../shared/note-interface';
import {NewNoteInterface} from '../shared/new-note-interface';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  @Input() title: string;

  notes: NoteInterface[] = [
    {id: 1, title: 'Note Name', text: 'Note Text'},
    {id: 2, title: 'Example 1', text: 'Text example'},
    {id: 3, title: 'End application', text: 'Implement all features notepad application'}
  ];

  constructor() {
  }

  onNewNote(item): void {
    this.notes.push(item);
  }

  onDellItem(itemIndex: number): void {
    this.notes.splice(itemIndex, 1);
  }

  onUpdateItem(item: NewNoteInterface): void {
    this.notes.splice(item.index, 1, item.newItem);
  }
}
