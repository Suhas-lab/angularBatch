import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  });
  constructor() { }

  ngOnInit(): void {
  }
  updateName() {
    this.name.setValue('Nancy');
  }
  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
