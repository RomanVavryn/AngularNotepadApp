import {Component, Input, OnInit} from '@angular/core';
import {NoteInterface} from '../shared/note-interface';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  notes: NoteInterface[] = [
    {id: 1, title: 'Note Name', text: 'Note Text'},
    {id: 2, title: 'My note 1', text: 'My note text'},
    {id: 3, title: 'End application', text: 'End all features notepad application'}
  ];

  @Input() title: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  onNewNote(item): void {
    this.notes.push(item);
  }

  onDellItem(itemIndex: number): void {
    this.notes.splice(itemIndex, 1);
  }
}
