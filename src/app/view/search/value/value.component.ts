import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: []
})
export class ValueComponent {
  
  @Input() value: number = 0;
  @Input() desabled: boolean = false;

  @Output() readInput: EventEmitter<number> = new EventEmitter<number>();

  constructor(){}

  onChange(e: any){
    this.readInput.emit(Number(e.replaceAll('.', '').replace(',','.')));
  }
}
