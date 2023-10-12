import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
   public PropertyId: number;  

  constructor(private route : ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.PropertyId = +this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params) => { 
        this.PropertyId = +params['id']; 
      }
    );
  }
  onSelectNext(){
    this.PropertyId +=1
    this.router.navigate(['propertydetail',this.PropertyId]);
  }

}
