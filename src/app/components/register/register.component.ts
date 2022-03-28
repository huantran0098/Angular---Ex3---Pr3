import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formData = this.formBuilder.group({
    email: ['', [
      Validators.required,
      Validators.email]],
    password: ['', Validators.required ],
    rePassword: ['', Validators.required ],
    country: ['', Validators.required ],
    age: ['', [
      Validators.min(1),
      Validators.required,
      Validators.pattern("^[0-9]{100}")]],
    gender: ['', Validators.required ],
    phone: ['', [
      Validators.pattern("^[0-9\\+]{9,11}$"),
      Validators.required ]],
  }, {validator: this.checkIfMatchingPasswords('password', 'rePassword')
  })

  public checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      } else {
        return passwordConfirmationInput.setErrors(null);
      }
    }
  }

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  public onSubmit() {
    console.log(this.formData.value)
  }
}
