import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nameeditor',
  templateUrl: './nameeditor.component.html',
  styleUrls: ['./nameeditor.component.scss']
})
export class NameeditorComponent implements OnInit {
  name = new FormControl('');
 
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    addressgroup : new FormGroup({
      addresslin1 : new FormControl(''),
      addresslin2 : new FormControl(''),
      street : new FormControl(''),
      city: new FormControl(''),
      zip: new FormControl(''),
    })
  });

  // profileForm = this.fb.group({
  //   firstName: ['', Validators.required],
  //   lastName: [''],
  //   address: this.fb.group({
  //     street: [''],
  //     city: [''],
  //     state: [''],
  //     zip: ['']
  //   }),
  // });


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.updateProfile();
  }
  updateName() {
    this.name.setValue('Nancy');
  }
  onSubmit() {
    console.log(this.profileForm.value);
  }
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      addressgroup: {
        addresslin1: 'Kothrud Pune 10',
        street: '123 Drew Street'
      }
    });
  }
  
}
