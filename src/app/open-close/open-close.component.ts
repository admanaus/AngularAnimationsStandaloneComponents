import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-open-close',
  standalone: true,
  imports: [
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './open-close.component.html',
  styleUrl: './open-close.component.css',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('* => closed', [ // <-- see this
        animate('1s')
      ]),
      transition('* => open', [ // <-- and this
        animate('0.5s')
      ])
    ])
  ]
})
export class OpenCloseComponent {

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
