import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbdSortableHeader } from '../category-table/sortable.directive';
import { SortEvent } from './location-sortable.directive';
import { LocationService } from './location.service';
import { Location } from './location';

@Component({
  selector: 'app-location-table',
  templateUrl: './location-table.component.html',
  styleUrls: ['./location-table.component.css']
})
export class LocationTableComponent {

  locations$: Observable<Location[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader)
  headers!: QueryList<NgbdSortableHeader>;

  constructor(public service: LocationService) {
    this.locations$ = service.locations$;
    this.total$ = service.total$;
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

}
