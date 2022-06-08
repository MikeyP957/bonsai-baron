import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {

  error:string | null;
  
  constructor() { 
    this.error = null
  }

  registerUser(event: FormGroup) {
  console.log(event.value)
  }
 
}
