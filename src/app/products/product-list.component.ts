import { Component } from '@angular/core';

//This is a PLComponent as a directve with the selector
//Component decorator that defines the metadata
@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html', //our HTML, our wiew
})
//Class wich defines are associated code
export class ProductListComponent {}
