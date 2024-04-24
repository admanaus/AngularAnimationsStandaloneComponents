import { Component, HostBinding, OnInit } from '@angular/core';
import { Character } from '../character';
import { CommonModule } from '@angular/common';
import {  MatListModule } from '@angular/material/list';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-filter-stagger',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
  ],
  templateUrl: './filter-stagger.component.html',
  styleUrl: './filter-stagger.component.css',
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('mat-list-item, form', [
          style({opacity: 0, transform: 'translateY(-100px)'}),
          stagger(-30, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ]),
    trigger('filterAnimation', [
      transition(':enter, * => 0, * => -1', []),
      transition(':increment', [
        query(':enter', [
          style({ opacity: 0, width: '0px' }),
          stagger(50, [
            animate('500ms ease-out', style({ opacity: 1, width: '*' })),
          ]),
        ], { optional: true })
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(50, [
            animate('500ms ease-out', style({ opacity: 0, width: '0px' })),
          ]),
        ])
      ]),
    ])
  ]
})
export class FilterStaggerComponent {

  characters: Array<Character> = [
    {name: 'Luke Skywalker', side: 'light'},
    {name: 'Darth Vader', side: 'dark'},
    {name: 'Obi-wan Kenobi', side: 'light'},
    {name: 'Princess Leiah', side: 'light'},
    {name: 'Palpatine', side: 'dark'},
    {name: 'Boba Fett', side: 'dark'},

  ]

  @HostBinding('@pageAnimations') // <-- attach trigger to host
  public animatePage = true; // <-- decorator can't go by itself 

  updateCriteria(criteria: string) {
    criteria = criteria ? criteria.trim() : '';
    this.characters = this.characters.filter(char => char.name.toLowerCase().includes(criteria.toLowerCase()));
    console.log(this.characters);
  }
}
