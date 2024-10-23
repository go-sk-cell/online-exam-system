import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination-summary',
  templateUrl: './pagination-summary.component.html',
  styleUrls: ['./pagination-summary.component.scss']
})
export class PaginationSummaryComponent implements OnInit {

  @Input() totalItems!: number;
  @Input() startNumber!: number;
  @Input() endNumber!: number;
  @Input() index: number=0;

    constructor() {}
    ngOnInit(): void {}

    get pageNumber(): number {
        let pageNumberValue=0;
        if(this.totalItems>0){
            pageNumberValue = (this.startNumber - 1) * this.endNumber + 1
        }
        // let value = (this.startNumber - 1) * this.endNumber + 1
        // console.log("pageNumberValue",pageNumberValue);
        return pageNumberValue;
    }

    get pageSizeNumber(): number {
        const endIndex = this.startNumber * this.endNumber;
        return endIndex > this.totalItems ? this.totalItems : endIndex;
    }

}
