import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

  @Component({
    selector: 'ngx-form-questions',
    styleUrls: ['./form-questions.component.scss'],
    templateUrl: './form-questions.component.html',

  })
  export class FormQuestionsComponent implements OnInit {
  interests = [];

  formGroup = new FormGroup({ secondCtrl: new FormControl(''), })
  ngOnInit() {
    this.interests = [
      { value: 'reading', viewValue: 'Reading' },
      { value: 'swimming', viewValue: 'Swimming' },
      { value: 'cycling', viewValue: 'Cycling' }
    ];
  }

}