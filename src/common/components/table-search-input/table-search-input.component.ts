import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-search-input',
  templateUrl: './table-search-input.component.html',
  styleUrls: ['./table-search-input.component.scss']
})
export class TableSearchInputComponent implements OnInit {
  msg: any = '';
  msgCount: number = 1;
  @Output() childEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onBtnClick(){
    // Send a notification to the parent 
    // that the button is clicked inside the child component

    let message = 'This is child message '+ this.msgCount;
    // Send msg to parent
    this.childEmitter.emit(message);
    this.msgCount+=1;

   // this.childEmitter.emit();
  }

  onKeyUpEvent(event:any) {
    console.log('onKeyUpEvent -- > ' + event.value);
    this.childEmitter.emit(event.value);
  }

}
