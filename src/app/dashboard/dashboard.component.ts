import { Component, OnInit } from '@angular/core';

import { Dwarf } from '../dwarf';
import { DwarfService } from '../dwarf.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dwarves: Dwarf[] = [];

  constructor(private dwarfService: DwarfService) { }

  ngOnInit() {
    this.getDwarves();
  }

  getDwarves(): void {
    this.dwarfService.getDwarves()
      .subscribe(dwarves => this.dwarves = dwarves.slice(1, 5));
  }
}