import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { EmptyModule } from './empty/empty.module';
import { VerticalModule } from './vertical/vertical.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const layoutModules = [
  // Empty
  EmptyModule,

  // Vertical navigation
  VerticalModule
];

@NgModule({
  imports: [
    RouterModule,
    // SharedModule,
    HttpClientModule,
    ...layoutModules
  ],
  exports: [
    LayoutComponent,
    ...layoutModules
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { }
