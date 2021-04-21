import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Dwarf } from './dwarf';
import { DWARVES } from './mock-dwarves';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DwarfService {

  private dwarvesUrl = 'api/dwarves';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getDwarves(): Observable<Dwarf[]> {
    return this.http.get<Dwarf[]>(this.dwarvesUrl)
      .pipe(
        tap(_ => this.log('fetched dwarves')),
        catchError(this.handleError<Dwarf[]>('getDwarves', [])));
  }

  getDwarf(id: number): Observable<Dwarf> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const url = `${this.dwarvesUrl}/${id}`;
    return this.http.get<Dwarf>(url).pipe(
      tap(_ => this.log(`fetched dwarf id=${id}`)),
      catchError(this.handleError<Dwarf>(`getDwarf id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchDwarves(term: string): Observable<Dwarf[]> {
    if (!term.trim()) {
      // if not search term, return empty dwarf array.
      return of([]);
    }
    return this.http.get<Dwarf[]>(`${this.dwarvesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found dwarves matching "${term}"`) :
        this.log(`no dwarves matching "${term}"`)),
      catchError(this.handleError<Dwarf[]>('searchDwarves', []))
    );
  }


  /** POST: add a new hero to the server */
  addDwarf(dwarf: Dwarf): Observable<Dwarf> {
    return this.http.post<Dwarf>(this.dwarvesUrl, dwarf, this.httpOptions).pipe(
      tap((newDwarf: Dwarf) => this.log(`added dwarf w/ id=${newDwarf.id}`)),
      catchError(this.handleError<Dwarf>('addDwarf'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteDwarf(id: number): Observable<Dwarf> {
    const url = `${this.dwarvesUrl}/${id}`;

    return this.http.delete<Dwarf>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted dwarf id=${id}`)),
      catchError(this.handleError<Dwarf>('deleteDwarf'))
    );
  }

  /** PUT: update the hero on the server */
  updateDwarf(dwarf: Dwarf): Observable<any> {
    return this.http.put(this.dwarvesUrl, dwarf, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${dwarf.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`DwarfService: ${message}`);
  }
}
