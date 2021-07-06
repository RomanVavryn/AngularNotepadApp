import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NoteInterface} from '../shared/note-interface';

@Component({
  selector: 'app-add-btn',
  templateUrl: './add-btn.component.html',
  styleUrls: ['./add-btn.component.scss']
})
export class AddBtnComponent implements OnInit {
  closeResult = '';
  @Output() newNoteData: EventEmitter<NoteInterface> = new EventEmitter();
  nTitle: string | undefined;
  nText: string | undefined;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }


  open(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  newNote(): void {
    if (this.nTitle.trim().length > 4 && this.nText.trim().length > 4) {
      const nItem = {
        title: this.nTitle,
        text: this.nText
      };
      this.newNoteData.emit(nItem);
      this.modalService.dismissAll();
      this.nTitle = '';
      this.nText = '';
    }
  }
}
