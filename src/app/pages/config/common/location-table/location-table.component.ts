import { Component, EventEmitter, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationService } from './location.service';
import { Location } from '../../../../_interfaces/location';

@Component({
  selector: 'app-location-table',
  templateUrl: './location-table.component.html',
  styleUrls: ['./location-table.component.css']
})
export class LocationTableComponent {

  @Output() editLocation = new EventEmitter();

  locations$: Observable<Location[]>;
  total$: Observable<number>;


  constructor(public service: LocationService) {
    this.locations$ = service.locations$;
    this.total$ = service.total$;
  }

  onEditClick(location: Location) {
    this.editLocation.emit(location);
  }

}
