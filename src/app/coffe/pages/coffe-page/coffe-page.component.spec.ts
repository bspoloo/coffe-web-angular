import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffePageComponent } from './coffe-page.component';

describe('CoffePageComponent', () => {
  let component: CoffePageComponent;
  let fixture: ComponentFixture<CoffePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoffePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
