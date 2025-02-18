import { Component } from '@angular/core';
import { CoffeRouteInterface } from '../../interfaces/coffe-route.interface';

@Component({
  selector: 'shared-menu-bar',
  standalone: false,
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  public listRoutes : CoffeRouteInterface[];
  constructor(){
    this.listRoutes = [
      {
        name: 'List of Coffes',
        url: 'list'
      },
      {
        name: 'New Coffe',
        url: 'form'
      },
      {
        name: 'Look for a coffe',
        url: 'search'
      }
    ]
  }
}
