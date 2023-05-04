import { Component, QueryList, ViewChildren } from '@angular/core';
import { Category } from './category';
import { Observable } from 'rxjs/internal/Observable';
import { CategoryService } from './category.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent {

  categories$: Observable<Category[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader)
  headers!: QueryList<NgbdSortableHeader>;

  constructor(public service: CategoryService) {
    this.categories$ = service.categories$;
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
