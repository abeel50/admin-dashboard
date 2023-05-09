import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CategoryService } from './category.service';
import { FeaturedCategory, FeaturedSubCategory } from 'src/app/_interfaces';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent {
  @Output() editFeatured = new EventEmitter();


  categories$: Observable<FeaturedCategory[]>;
  total$: Observable<number>;


  constructor(public service: CategoryService) {
    this.categories$ = service.categories$;
    this.total$ = service.total$;
  }

  onEditClick(fc: FeaturedCategory) {
    this.editFeatured.emit(fc);
  }

  getIds(subCat: FeaturedSubCategory[]) {
    return subCat.map(obj => obj.id);
  }


}
