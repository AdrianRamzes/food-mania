import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipiesComponent } from './recipies.component';

describe('RecipiesListComponent', () => {
  let component: RecipiesComponent;
  let fixture: ComponentFixture<RecipiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecipiesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
