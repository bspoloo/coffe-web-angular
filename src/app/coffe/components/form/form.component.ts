import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CoffeService } from '../../services/coffe.service';
import { Coffe, Flavor } from '../../interfaces/coffe.interfaces';
import { ArrayFlavor } from '../../classes/ArrayFlavor.class';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  public coffe?: Coffe;
  private router: Router;

  public myForm: FormGroup;
  constructor(private fb: FormBuilder, private coffeService: CoffeService, private activateRoute: ActivatedRoute) {
    this.router = new Router();
    this.myForm = this.fb.group({
      name: ['', [Validators.minLength(3), Validators.maxLength(20)]],
      description: ['', [Validators.minLength(3), Validators.maxLength(40)]],
      isAvaible: [true, [Validators.requiredTrue]],
      flavor: ['', [Validators.required]],
      flavors: this.fb.array([
        ['chocolate', [Validators.required]],
        ['leche', [Validators.required]],
      ])
    });
  }
  ngOnInit(): void {
    if (!this.router.url.includes("edit")) {
      return;
    }
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.coffeService.getOnById(id))
      )
      .subscribe(coffe => {
        if (!coffe) {
          return this.router.navigate(['coffes/list'])
        }
        this.coffe = coffe;
        this.myForm.reset({
          id: coffe.id,
          name: coffe.name,
          description: coffe.description,
          flavors: ArrayFlavor.objectToArrayString(coffe.flavors),
        });
        return;
      });
  }
  public getCurrentCoffe(): Coffe {
    const coffe = this.myForm.value as Coffe;
    return {
      id: Number(this.activateRoute.snapshot.paramMap.get('id')),
      name: coffe.name,
      description: coffe.description,
      flavors: ArrayFlavor.arrayToObject(this.getFlavors())
    } as Coffe;
  }
  public getFlavors(): FormArray {
    return this.myForm.get('flavors') as FormArray;
  }
  public onSave(): void {

    if (!this.myForm.valid) {
      return;
    }

    if (this.getCurrentCoffe().id) {
      this.coffeService.update(this.getCurrentCoffe()).subscribe((coffe) => {
        console.log(`${coffe.name} was updated succefully`);
      });
      return;
    }
    this.coffeService.create(this.getCurrentCoffe())
      .subscribe(coffe => {
        console.log('Coffe Created Succefully: ', coffe);
      });
    this.getFlavors().clear();
    this.myForm.reset();
  }
  public onDelete(): void {
    if (!this.getCurrentCoffe().id) {
      throw new Error("Current hero not exist");
    }
    this.coffeService.delete(this.getCurrentCoffe().id)
      .subscribe(coffe => {
        console.log('Coffe deleted: ', coffe);
        this.router.navigate(['./list']);
      });
  }
  public addToFlavors(): void {
    if (this.myForm.get('flavor')?.invalid) {
      console.log('Form flavors its empty');
      return;
    }
    this.getFlavors().push(
      this.fb.control(
        this.myForm.controls['flavor'].value, Validators.required
      )
    );
  }
  public removeToFlavors(index: number): void {
    this.getFlavors().removeAt(index);
  }
}
