import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss'],
  // animations: [
  //   trigger('openClose', [
  //     // ...
  //     state('open', style({
  //       height: '200px',
  //       opacity: 1,
  //       backgroundColor: 'yellow'
  //     })),
  //     state('closed', style({
  //       height: '100px',
  //       opacity: 0.8,
  //       backgroundColor: 'blue'
  //     })),
  //     transition('open => closed', [
  //       animate('1s')
  //     ]),
  //     transition('closed => open', [
  //       animate('0.5s')
  //     ]),
  //   ]),
  // ],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'red'
      })),
      transition('open => closed', [
        animate('1s' ,keyframes([
          style({ backgroundColor: "red" }), // offset = 0
          style({ backgroundColor: "blue" }), // offset = 0.33
          style({ backgroundColor: "orange" }), // offset = 0.66
          style({ backgroundColor: "black" }), // offset = 1
        ]))
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),


      // transition('open <=> closed', [
      //   animate('1s')
      // ]),



      // transition('* => closed', [
      //   animate('1s')
      // ]),
      // transition('* => open', [
      //   animate('0.5s')
      // ]),


      // transition('open <=> closed', [
      //   animate('2s')
      // ]),
      // transition ('* => open', [
      //   animate ('1s',
      //     style ({ opacity: '*' }),
      //   ),
      // ]),
      // transition('* => *', [
      //   animate('1s')
      // ]),
    ])
  ]
})
export class OpenCloseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
