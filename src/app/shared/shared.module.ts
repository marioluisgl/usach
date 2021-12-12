import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetModule } from './widget/widget.module';
import { PagetitleComponent } from './pagetitle/pagetitle.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PagetitleComponent
  ],
  imports: [
    CommonModule,
    WidgetModule,
    RouterModule,
  ],
  exports: [PagetitleComponent]
})
export class SharedModule { }
