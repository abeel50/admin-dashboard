/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import { Injectable, PipeTransform } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { Slider } from 'src/app/_interfaces';
import { SLIDERS } from 'src/app/_constants';

interface SearchResult {
    sliders: Slider[];
    total: number;
}

interface State {
    page: number;
    pageSize: number;
    searchTerm: string;
}

const compare = (v1: string | number, v2: string | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);


function matches(slider: Slider, term: string, pipe: PipeTransform) {
    return (
        slider.title.toLowerCase().includes(term.toLowerCase())
    );
}

@Injectable({ providedIn: 'root' })
export class SliderService {
    private _loading$ = new BehaviorSubject<boolean>(true);
    private _search$ = new Subject<void>();
    private _sliders$ = new BehaviorSubject<Slider[]>([]);
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
                this._sliders$.next(result.sliders);
                this._total$.next(result.total);
            });

        this._search$.next();
    }

    get sliders$() {
        return this._sliders$.asObservable();
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

        // 1. Search
        let sliders = SLIDERS.filter((slider) => matches(slider, searchTerm, this.pipe));
        const total = sliders.length;

        // 3. paginate
        sliders = sliders.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return of({ sliders, total });
    }
}
