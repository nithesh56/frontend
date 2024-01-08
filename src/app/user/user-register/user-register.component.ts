import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import * as alertyfy from 'alertifyjs'
import { AlertifyService } from 'src/app/services/alertify.service';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  registrationForm: FormGroup;
  user :User;
  userSubmitted : boolean;

  constructor(private fb : FormBuilder,private userService :UserServiceService,private alertify: AlertifyService ) {}

  ngOnInit() {
    // this.registrationForm = new FormGroup({
    //   userName: new FormControl(null, Validators.required),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //   confirmPassword: new FormControl(null, [Validators.required]),
      // mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    // });

    // this.registrationForm.setValidators(this.passwordMatchingValidator);
    this.createRegisterationForm();

    
  }

  createRegisterationForm() {
    this.registrationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.maxLength(10)]]
    }, { validators: this.passwordMatchingValidator });
  }

  passwordMatchingValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { notmatched: true };
  
  }
  onSubmit() {
    console.log(this.registrationForm.value);
    this.userSubmitted=true;
    if(this.registrationForm.valid){
    // const newUser = Object.assign({}, this.registrationForm.value);
    this.userService.addUser(this.userData());
    this.registrationForm.reset();
    this.userSubmitted =false;
    this.alertify.success('congrats,you are successfully registered')
    
  } else {
    this.alertify.error('Kindly provide required fields')

  }
  }
  
  userData(): User{
    return this.user ={
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value,
  
    }
  }
  //----------------------------
  // Getter methods for all form controls
  //----------------------------

  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }
  get email(){
    return this.registrationForm.get('email') as FormControl;
  }
  get password(){
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }

  //---------------------------------
  
  
 

}
