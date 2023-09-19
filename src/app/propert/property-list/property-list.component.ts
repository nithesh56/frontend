import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  properties : Array <any> =[
    {
      "Id":1,
      "Name":"Birla House",
      "Type":"House",
      "Price":12000

    },
    {
      "Id":2,
      "Name":"Erose villa",
      "Type":"House",
      "Price":18600

    },
    {
      "Id":3,
      "Name":"Gree Garden",
      "Type":"House",
      "Price":17000

    },
    {
      "Id":4,
      "Name":"White House",
      "Type":"House",
      "Price":25000

    },
    {
      "Id":5,
      "Name":"Macro Home",
      "Type":"House",
      "Price":20000

    },
    {
      "Id":6,
      "Name":"MoonLigt",
      "Type":"House",
      "Price":15000

    },

]
}
