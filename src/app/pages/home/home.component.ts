import { Component } from '@angular/core';
import { IcecreamService } from 'src/app/service/icecream.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public icecreamSrvc:IcecreamService ){
    console.log(icecreamSrvc.product)
  }
}
