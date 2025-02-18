import { Component, OnInit } from '@angular/core';
import { CoffeService } from '../../services/coffe.service';
import { Coffe } from '../../interfaces/coffe.interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-coffe-page',
  standalone: false,
  templateUrl: './coffe-page.component.html',
  styleUrl: './coffe-page.component.css',
})
export class CoffePageComponent implements OnInit {
  public coffe?: Coffe;
  public router: Router = new Router();

  constructor(
    private coffeService: CoffeService,
    private activatedRouted: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRouted.params
      .pipe(switchMap(({ id }) => this.coffeService.getOnById(id)))
      .subscribe((coffe) => {
        if (!coffe) {
          this.router.navigate(['/coffes/list']);
        }
        this.coffe = coffe;
        console.log(coffe);
        return;
      });
  }
}
