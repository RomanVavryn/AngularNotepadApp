import {Component, Input, OnInit} from '@angular/core';
import {NoteInterface} from '../shared/note-interface';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  notes: NoteInterface[] = [
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
