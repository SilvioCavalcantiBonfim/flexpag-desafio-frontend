import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styles: ['.dpcontainer{max-height: 40vh; overflow: auto}']
})
export class DropdownComponent implements OnChanges{
  @Input() title: string = '';
  @Input() itens: any[] = [];
  @Input() value: any;

  @Output() onChange = new EventEmitter<SimpleChanges>();

  @Output() change = new EventEmitter<any>();

  setValue(v: any):void{
    this.change.emit(v);
  }

  get valueMode(): any{
    if(this.value === undefined)
      return '-';
    else if(this.value.nome === undefined)
      return this.value;
    else
      return this.value.nome;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.onChange.emit(changes);
  }

  get listNotSelected(): any[]{
    return this.itens.filter(e => e!==this.value);
  }
}
