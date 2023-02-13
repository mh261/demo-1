import { Component } from '@angular/core';
import { IcecreamService } from 'src/app/service/icecream.service';

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
      temp.style.display = 'block';
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
