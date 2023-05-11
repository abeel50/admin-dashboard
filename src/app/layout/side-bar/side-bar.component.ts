import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateProducts() {
    this.router.navigate(['/products/'])
  }

  navigateOrders() {
    this.router.navigate(['/orders/'])
  }

  navigateRiders() {
    this.router.navigate(['/riders/']);
  }

  navigatePackages() {
    this.router.navigate(['/packages/']);
  }

}
