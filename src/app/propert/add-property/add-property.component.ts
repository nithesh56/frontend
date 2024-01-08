import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
selectPropertyType(_t36: string) {
throw new Error('Method not implemented.');
}
  @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;
  SellRent = '1';
  // will come from masters
  propertyTypes: Array<string> = ['House', 'Appartments', 'Duplex'];
  furnishTypes: Array<string>=['Fully','Semi','Unfurnished'];
  

  constructor(private router: Router) { }

  ngOnInit() {
    // this.addPropertyForm.controls['Name'].setValue('Default Value');

    setTimeout(() => {
      this.addPropertyForm.controls['Name'].setValue('');
    });

  }

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    console.log('Congrats, form Submitted');
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }

}