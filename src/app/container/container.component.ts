import {Component, Input, OnInit} from '@angular/core';
import {NoteInterface} from '../shared/note-interface';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  notes: NoteInterface[] = [
    {title: 'Note Name', text: 'Note Text'},
    {title: 'My Notepad application', text: 'Created an notepad application using angular'},
    {title: 'Notepad text', text: 'Some text'}
  ];

  @Input() title: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  onNewNote(item): void {
    this.notes.push(item);
  }
}
