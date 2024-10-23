import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpcomingExamComponent } from 'app/pages/upcoming-exam/upcoming-exam.component';
import { CurrentExamComponent } from 'app/pages/current-exam/current-exam.component';
import { PastExamComponent } from 'app/pages/past-exam/past-exam.component';
import { LoginHistoryComponent } from 'app/pages/login-history/login-history.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationModule } from 'common/components/custom-pagination/pagination/pagination.module';
import { TableSearchInputComponent } from 'common/components/table-search-input/table-search-input.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgxPaginationModule,
    PaginationModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    CurrentExamComponent,
    UpcomingExamComponent,
    PastExamComponent,
    LoginHistoryComponent,
    TableSearchInputComponent,
  ]
})

export class AdminLayoutModule {}
