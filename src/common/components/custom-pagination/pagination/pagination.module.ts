import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationControlsComponent } from './pagination-controls/pagination-controls.component';
import { PaginationDropdownComponent } from './pagination-dropdown/pagination-dropdown.component';
import { PaginationSummaryComponent } from './pagination-summary/pagination-summary.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PaginationControlsComponent,PaginationDropdownComponent, PaginationSummaryComponent],
  imports: [CommonModule, NgxPaginationModule, FormsModule],
  exports: [PaginationControlsComponent, PaginationDropdownComponent, PaginationSummaryComponent]
})
export class PaginationModule { }
