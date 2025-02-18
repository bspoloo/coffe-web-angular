import { Component, Input } from '@angular/core';
import { Coffe } from '../../interfaces/coffe.interfaces';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  public coffe? : Coffe;

  constructor(){}
}
