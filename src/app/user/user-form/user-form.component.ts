import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  newUserFormGroup = new FormGroup({
    gender: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{10}$")])
  });
  titles = ['Mr.', 'Mrs.','Ms.'];
  genders = ['Male', 'Female','Others']
  constructor(private router: Router, private toastr: ToastrManager) { }

  ngOnInit() {
  }
  newRegistration = () => {
    try {
      let userlist = JSON.parse(localStorage.getItem('userList'))
      userlist.push({
        gender: this.newUserFormGroup.value.gender,
        name: {
          first: this.newUserFormGroup.value.firstName,
          last: this.newUserFormGroup.value.firstName,
          title: this.newUserFormGroup.value.firstName,
        },
        email: this.newUserFormGroup.value.email,
        username: this.newUserFormGroup.value.username,
        password: this.newUserFormGroup.value.password,
        dob: new Date(this.newUserFormGroup.value.dob).getTime() / 1000,
        phone: this.newUserFormGroup.value.phone,
      })
      localStorage.setItem('userList', JSON.stringify(userlist))
      this.toastr.successToastr('User added successfully')
      this.router.navigate(['user/userlist'])
    } catch (error) {
      this.toastr.errorToastr('Something went wrong. Please try again', error)
    }
  }
}
