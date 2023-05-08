import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Slider } from 'src/app/_interfaces';
import { SliderService } from './slider.service';

@Component({
  selector: 'app-slider-table',
  templateUrl: './slider-table.component.html',
  styleUrls: ['./slider-table.component.css']
})
export class SliderTableComponent implements OnInit {

  sliders$: Observable<Slider[]>;
  total$: Observable<number>;


  constructor(public service: SliderService) {
    this.sliders$ = service.sliders$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {
  }



}
