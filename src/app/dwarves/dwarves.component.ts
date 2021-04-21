import { Component, OnInit } from '@angular/core';

import { Dwarf } from '../dwarf';
import { DwarfService } from '../dwarf.service';

@Component({
  selector: 'app-dwarves',
  templateUrl: './dwarves.component.html',
  styleUrls: ['./dwarves.component.css']
})
export class DwarvesComponent implements OnInit {
  dwarves: Dwarf[];

  constructor(private dwarfService: DwarfService) { }

  ngOnInit() {
    this.getDwarves();
  }

  getDwarves(): void {
    this.dwarfService.getDwarves()
      .subscribe(dwarves => this.dwarves = dwarves);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.dwarfService.addDwarf({ name } as Dwarf)
      .subscribe(dwarf => {
        this.dwarves.push(dwarf);
      });
  }

  delete(dwarf: Dwarf): void {
    this.dwarves = this.dwarves.filter(h => h !== dwarf);
    this.dwarfService.deleteDwarf(dwarf.id).subscribe();
  }
}
