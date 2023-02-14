import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  showSubInfo() {
    let temp = document.getElementById('sub_info')
    if(temp?.style.display === "none"){
      temp.style.display = 'flex';
      temp.style.flexDirection = 'column';
    }else{
      temp!.style.display = 'none';
    }
}
}


