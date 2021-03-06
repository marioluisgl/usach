import { Component, OnInit } from '@angular/core';
import { LAYOUT_MODE } from '../../layouts/layouts.model';

@Component({
  selector: 'app-page500',
  templateUrl: './page500.component.html',
  styleUrls: ['./page500.component.scss']
})

/**
 * Page-500 Component
 */
export class Page500Component implements OnInit {

  layout_mode!: string
  constructor() { }

  ngOnInit(): void {
    this.layout_mode = LAYOUT_MODE
    if(this.layout_mode === 'dark') {
      document.body.setAttribute("data-layout-mode", "dark");
    }
  }

}
