import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwarvesComponent } from './dwarves.component';

describe('DwarvesComponent', () => {
  let component: DwarvesComponent;
  let fixture: ComponentFixture<DwarvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwarvesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwarvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
