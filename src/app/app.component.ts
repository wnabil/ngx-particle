import { Component } from '@angular/core';
import { IParams } from 'projects/ngx-particle/src/lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  params = {
    particles: {
      number: {
        value: 300,
      },
      move: {
        speed: 1,
      },
    },
  } as IParams;

  
}

