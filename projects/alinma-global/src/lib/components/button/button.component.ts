import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'alinma-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() color: string = '';
  @Input() size: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  clickFn() {
    console.log('test');
  }

}
