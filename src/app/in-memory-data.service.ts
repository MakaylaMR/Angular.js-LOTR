import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Dwarf } from './dwarf';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const dwarves = [
      { id: 11, name: 'Dwalin' },
      { id: 12, name: 'Balin' },
      { id: 13, name: 'Kili' },
      { id: 14, name: 'Fili' },
      { id: 15, name: 'Dori' },
      { id: 16, name: 'Nori' },
      { id: 17, name: 'Ori' },
      { id: 18, name: 'Oin' },
      { id: 19, name: 'Gloin' },
      { id: 20, name: 'Bifur' }
    ];
    return { dwarves };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(dwarves: Dwarf[]): number {
    return dwarves.length > 0 ? Math.max(...dwarves.map(dwarf => dwarf.id)) + 1 : 11;
  }
}