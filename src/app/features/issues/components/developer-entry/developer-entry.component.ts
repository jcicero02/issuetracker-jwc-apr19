import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { AddedDeveloper } from '../../actions/developer.actions';

@Component({
  selector: 'app-developer-entry',
  templateUrl: './developer-entry.component.html',
  styleUrls: ['./developer-entry.component.css']
})
export class DeveloperEntryComponent implements OnInit {

  developerForm: FormGroup;
  hasErrors = false;
  constructor(private formBuilder: FormBuilder, private store: Store<State>) { }

  ngOnInit() {
    this.developerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      department: ['ero'],
      emailAddress: ['', {
        validators: [Validators.required, Validators.email, notThatPersonValidator('joe@aol.com')],
        updateOn: 'blur'
      }]
    });
    // this.developerForm.valueChanges.subscribe(v => console.log(v));
  }


  onSubmit(focusme: HTMLInputElement) {
    if (this.developerForm.valid) {
      const { firstName, lastName, department: team } = this.developerForm.value;
      this.store.dispatch(new AddedDeveloper(firstName, lastName, team));
      this.developerForm.reset();
      focusme.focus();
      this.hasErrors = false;
    } else {
      this.hasErrors = true;
    }
  }

  get firstName() {
    return this.developerForm.get('firstName');
  }

  get lastName() {
    return this.developerForm.get('lastName');
  }

  get emailAddress() {
    return this.developerForm.get('emailAddress');
  }
}


function notThatPersonValidator(name: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value === name) {
      return {
        jerk: true
      };
    } else {
      return null;
    }
  };
}
