import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-dropdown',
  templateUrl: './pagination-dropdown.component.html',
  styleUrls: ['./pagination-dropdown.component.scss']
})
export class PaginationDropdownComponent implements OnInit {

  selectedValue: any = 10;
  @Output() pageSizeChanged = new EventEmitter<any>();

    constructor() { }
    ngOnInit(): void {}
    onPageChanged(selectedValue: any): void {
        this.pageSizeChanged.emit(selectedValue);
    }

}
