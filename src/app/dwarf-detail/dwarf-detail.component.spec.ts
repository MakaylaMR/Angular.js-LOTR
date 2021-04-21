import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwarfDetailComponent } from './dwarf-detail.component';

describe('DwarfDetailComponent', () => {
  let component: DwarfDetailComponent;
  let fixture: ComponentFixture<DwarfDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwarfDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwarfDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
