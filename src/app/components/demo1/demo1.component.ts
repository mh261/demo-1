import { Component } from '@angular/core';
import { IcecreamService } from 'src/app/service/icecream.service';
import { CartComponent } from 'src/app/pages/cart/cart.component';4

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component {

  constructor(public icecreamSrvc: IcecreamService){
  
  }

  showSubInfo() {
    let temp = document.getElementById('sub_info')
    if(temp?.style.display === "none"){
      temp.style.display = 'flex';
      temp.style.flexDirection = 'column';
    }else{
      temp!.style.display = 'none';
    }
    
  }

  b(sold: string){
    console.log(`click ${sold}`)
  }

// c() {

// }
}
