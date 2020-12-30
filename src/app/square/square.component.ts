import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton 
      [ngStyle]="{'background-color': 'white'}" 
      *ngIf="!value"
      [disabled]="winner">
      {{value}}</button>
    <button nbButton 
      [ngStyle]="{'background-color': 'blue'}" 
      *ngIf="value == 'X'"
      [disabled]="winner">
      {{ value }}</button>
    <button nbButton 
      [ngStyle]="{'background-color': 'red'}" 
      *ngIf="value == 'O'"
      [disabled]="winner">
      {{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
  @Input() winner: boolean;
}
