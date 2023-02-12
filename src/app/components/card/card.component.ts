import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
  

export class CardComponent {
  img =[
    {
      id: 1,
      title: "shiba" ,
      subtitle : "cho",
      content: "Shiba la cho",
      avatar:"https://th.bing.com/th/id/OIP.CBFZpMOFqyCjyHOJxouwVAHaE8?w=300&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },

    {
      id: 2,
      title: "cat" ,
      subtitle : "mew",
      content: "cat is moew",
      avatar:   "https://th.bing.com/th/id/OIP.CBFZpMOFqyCjyHOJxouwVAHaE8?w=300&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },

    {
      id: 3,
      title: "snowball" ,
      subtitle : "rabbit",
      content: "snowball is rabbit",
      avatar:     "https://th.bing.com/th/id/OIP.0Pf1aYEg6thpYRtsOf14-QHaE8?w=256&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",

    },

  ]
  a(content: string){
    console.log(`click ${content}`)
  }

}



