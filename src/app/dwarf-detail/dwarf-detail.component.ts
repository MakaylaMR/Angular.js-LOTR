import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DwarfService } from '../dwarf.service';
import { Dwarf } from '../dwarf';

@Component({
  selector: 'app-dwarf-detail',
  templateUrl: './dwarf-detail.component.html',
  styleUrls: ['./dwarf-detail.component.css']
})
export class DwarfDetailComponent implements OnInit {
  dwarf: Dwarf;

  constructor(
    private route: ActivatedRoute,
    private dwarfService: DwarfService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getDwarf();
  }

  getDwarf(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dwarfService.getDwarf(id)
      .subscribe(dwarf => this.dwarf = dwarf);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.dwarfService.updateDwarf(this.dwarf)
      .subscribe(() => this.goBack());
  }
}
