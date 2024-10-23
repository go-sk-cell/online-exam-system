import { Component, OnInit } from '@angular/core';
import { Config } from 'common/components/custom-pagination/pagination-config';


@Component({
  selector: 'app-current-exam',
  templateUrl: './current-exam.component.html',
  styleUrls: ['./current-exam.component.scss']
})
export class CurrentExamComponent implements OnInit {
  public config = { ...Config }
  msg!: string;
  
  constructor() { }

  ngOnInit() {}

  eventFired(msg: any) {
    this.msg = msg;
    this.config = { ...Config };
    this.config = { ...this.config };
    // this.getAllExceptionDashboardList();
  }

  onPageSizeChange(event): void {
    this.config = { ...Config };
    this.config.itemsPerPage = event;
    this.config = { ...this.config };
    // this.getAllExceptionDashboardList();
  //  this.masterSelected = this.checkifAllChecked(this.AllExceptionListData,this.SelectedExceptionId);
    // console.log("data123",data);

    // this.masterSelected = !data;
  }

  onPageChange(event): void {
    this.config.currentPage = event;
    this.config = { ...this.config };
    // this.getAllExceptionDashboardList();
    //this.masterSelected =  this.checkifAllChecked(this.AllExceptionListData,this.SelectedExceptionId);

    
    // this.masterSelected = !data;
  }
}
