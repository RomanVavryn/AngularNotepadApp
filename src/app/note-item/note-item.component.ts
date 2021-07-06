import {Component, Input, OnInit} from '@angular/core';
import {NoteInterface} from '../shared/note-interface';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss']
})
export class NoteItemComponent implements OnInit {
  optionsShow: boolean = false;
  @Input() noteItem: NoteInterface;

  constructor() {
  }

  ngOnInit(): void {
  }

}
