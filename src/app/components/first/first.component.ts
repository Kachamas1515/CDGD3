import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
num = 0;
@Input()
  name = 'banana';

  @Output()
  valueChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onInput(event) {
    console.log(event.target.value);
    this.name = event.target.value;
  }
  onBlur(event) {
     this.valueChange.emit(event.target.value);
  }

onInput1(event: any) {
   const value = (event.target as HTMLInputElement).value;
   console.log(value);
   this.name = value;
   this.valueChange.emit(value);
}
plus(event) {
this.num++;
}
minus(event) {
  this.num--;
}

}
