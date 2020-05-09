import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http.service';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginFormGroup = new FormGroup({
    passwordControl: new FormControl('', Validators.required),
    usernameControl: new FormControl('', Validators.required)
  });
  constructor(private httpClient: HttpService, private router: Router, private toastr: ToastrManager) { }

  ngOnInit() {
  }
  Login = () => {
    localStorage.clear();
    this.httpClient.getData(environment.getUserCredentials).subscribe((res: any) => {
      let credentials = res[0];
      if (credentials.username === this.LoginFormGroup.value.usernameControl &&
        credentials.password === this.LoginFormGroup.value.passwordControl) {
        this.httpClient.getData('https://randomuser.me/api/0.8/?results=20').subscribe((res: any) => {
          let userList = []
          res.results.forEach(element => {
            userList.push(element.user);
          });

          localStorage.setItem('userList', JSON.stringify(userList))

          this.router.navigate(['user/userlist'])
        })
      }
      else {
        this.toastr.errorToastr('Invalid Credentials')
      }
    })
  }
}
