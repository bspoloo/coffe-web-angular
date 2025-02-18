import { Component } from '@angular/core';
import { CoffeService } from '../../services/coffe.service';
import { Coffe } from '../../interfaces/coffe.interfaces';

@Component({
  selector: 'app-list-page',
  standalone: false,
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent {
  public coffes : Coffe[];

  constructor(private coffeService : CoffeService){
    this.coffes = [];
  }
  ngOnInit(): void {
    this.coffeService.getAll()
    .subscribe(
      coffes => this.coffes = coffes
    );
  }
}
