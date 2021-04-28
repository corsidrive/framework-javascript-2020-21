import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product-list';
  products = [
    {
      id:"3",
      name:"prodotto 1",
      price: 10,
    },
    {
      id:"5",
      name:"prodotto 2",
      price:20
    },
    {
      id:"6",
      name:"prodotto 3",
      price:10
    }
  ];


}
