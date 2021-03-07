import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = fb.group({
      email: fb.control('initial value', Validators.required)
  });

   }

   ngOnInit(): void {
    this.formGroup.reset({email: 'new value'});
}

  confirm(){
    console.log(this.formGroup.value);
  }

  name = "ali"
}

