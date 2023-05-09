import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FeaturedSubCategory } from 'src/app/_interfaces';

@Component({
  selector: 'app-sub-category-table',
  templateUrl: './sub-category-table.component.html',
  styleUrls: ['./sub-category-table.component.css']
})

export class SubCategoryTableComponent implements OnInit {

  @Input() sub_categories: FeaturedSubCategory[] = [];

  @Output() deleteSubCategory = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  onDeleteClick(id: number) {
    this.deleteSubCategory.emit(id);
  }


}