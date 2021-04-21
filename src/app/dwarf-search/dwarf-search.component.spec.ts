import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwarfSearchComponent } from './dwarf-search.component';

describe('DwarfSearchComponent', () => {
  let component: DwarfSearchComponent;
  let fixture: ComponentFixture<DwarfSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwarfSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwarfSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
