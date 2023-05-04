import { Component, OnInit } from '@angular/core';


interface SubCategory {
  name: string;
}

const SUB_CATEGORIES: SubCategory[] = [
  {
    name: 'Sub Category-1',
  },
  {
    name: 'Sub Category-2',
  },
  {
    name: 'Sub Category-3',
  },
  {
    name: 'Sub Category-4',
  },
  {
    name: 'Sub Category-5',
  },
  {
    name: 'Sub Category-6',
  },
  {
    name: 'Sub Category-7',
  },
  {
    name: 'Sub Category-8',
  },
];

@Component({
  selector: 'app-sub-category-table',
  templateUrl: './sub-category-table.component.html',
  styleUrls: ['./sub-category-table.component.css']
})


export class SubCategoryTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  sub_categories = SUB_CATEGORIES;


}




