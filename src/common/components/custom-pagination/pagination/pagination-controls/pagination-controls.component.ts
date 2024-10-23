import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PaginationControlsDirective, PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-pagination-controls',
  templateUrl: './pagination-controls.component.html',
  styleUrls: ['./pagination-controls.component.scss']
})
export class PaginationControlsComponent implements OnInit {
  @Input() config!: PaginationInstance;
  @Output() onPgeChangedEvent = new EventEmitter<any>();
  @ViewChild('p') paginationApi!: PaginationControlsDirective;

  constructor() {}
  ngOnInit(): void {}

  onPageChanged(event : any): void {
      console.log("event",event)
      this.onPgeChangedEvent.emit(event);
  }

}
