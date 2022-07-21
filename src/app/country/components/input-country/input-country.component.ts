import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
//
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-input-country',
  templateUrl: './input-country.component.html',
  styles: [],
})
export class InputCountryComponent implements OnInit {
  @Output() onSearch: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  //crear un observable
  //se va a ejecutar cada vez que deje de escribir
  debouncer: Subject<string> = new Subject();

  query = '';

  constructor() {}

  ngOnInit(): void {
    //la info se va emitir cada 300 milisegundos
    this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      console.log('debouncer: ', value);
      this.onDebounce.emit(value);
    });
  }

  search() {
    this.onSearch.emit(this.query);
  }

  keyDown() {
    console.log('keyDown');
    this.debouncer.next(this.query);
  }
}
