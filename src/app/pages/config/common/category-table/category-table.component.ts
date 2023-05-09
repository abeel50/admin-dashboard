import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CategoryService } from './category.service';
import { FeaturedCategory } from 'src/app/_interfaces';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent {

  categories$: Observable<FeaturedCategory[]>;
  total$: Observable<number>;


  constructor(public service: CategoryService) {
    this.categories$ = service.categories$;
    this.total$ = service.total$;
  }

  // onSort({ column, direction }: SortEvent) {
  //   // resetting other headers
  //   this.headers.forEach((header) => {
  //     if (header.sortable !== column) {
  //       header.direction = '';
  //     }
  //   });

  //   this.service.sortColumn = column;
  //   this.service.sortDirection = direction;
  // }

}
