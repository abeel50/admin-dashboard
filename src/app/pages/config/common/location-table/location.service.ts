import { Injectable, PipeTransform } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { Location } from '../../../../_interfaces/location';
import { LOCATIONS } from '../../../../_constants/locations';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';

interface SearchResult {
    locations: Location[];
    total: number;
}

interface State {
    page: number;
    pageSize: number;
    searchTerm: string;
}

const compare = (v1: string | number, v2: string | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);


function matches(location: Location, term: string, pipe: PipeTransform) {
    return (
        location.title.toLowerCase().includes(term.toLowerCase())
    );
}

@Injectable({ providedIn: 'root' })
export class LocationService {
    private _loading$ = new BehaviorSubject<boolean>(true);
    private _search$ = new Subject<void>();
    private _locations$ = new BehaviorSubject<Location[]>([]);
    private _total$ = new BehaviorSubject<number>(0);

    private _state: State = {
        page: 1,
        pageSize: 5,
        searchTerm: '',
    };

    constructor(private pipe: DecimalPipe) {
        this._search$
            .pipe(
                tap(() => this._loading$.next(true)),
                debounceTime(200),
                switchMap(() => this._search()),
                delay(200),
                tap(() => this._loading$.next(false)),
            )
            .subscribe((result) => {
                this._locations$.next(result.locations);
                this._total$.next(result.total);
            });

        this._search$.next();
    }

    get locations$() {
        return this._locations$.asObservable();
    }
    get total$() {
        return this._total$.asObservable();
    }
    get loading$() {
        return this._loading$.asObservable();
    }
    get page() {
        return this._state.page;
    }
    get pageSize() {
        return this._state.pageSize;
    }
    get searchTerm() {
        return this._state.searchTerm;
    }

    set page(page: number) {
        this._set({ page });
    }
    set pageSize(pageSize: number) {
        this._set({ pageSize });
    }
    set searchTerm(searchTerm: string) {
        this._set({ searchTerm });
    }

    private _set(patch: Partial<State>) {
        Object.assign(this._state, patch);
        this._search$.next();
    }

    private _search(): Observable<SearchResult> {
        const { pageSize, page, searchTerm } = this._state;

        // 2. filter
        let locations = LOCATIONS.filter((loc) => matches(loc, searchTerm, this.pipe));
        const total = locations.length;

        // 3. paginate
        locations = locations.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return of({ locations, total });
    }
}
