import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Dwarf } from '../dwarf';
import { DwarfService } from '../dwarf.service';

@Component({
  selector: 'app-dwarf-search',
  templateUrl: './dwarf-search.component.html',
  styleUrls: ['./dwarf-search.component.css']
})
export class DwarfSearchComponent implements OnInit {
  dwarves$: Observable<Dwarf[]>;
  private searchTerms = new Subject<string>();

  constructor(private dwarfService: DwarfService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.dwarves$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.dwarfService.searchDwarves(term)),
    );
  }
}