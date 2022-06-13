import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
  }

  @ViewChild('user') userInput: any;
  @ViewChild('password') passInput: any;

  login() {
    if(this.userInput.nativeElement.value =='' || this.passInput.nativeElement.value ==''){
      alert("email or password required");
    }
    else{
      if (this.userInput.nativeElement.value == 'user1') {
        if (this.passInput.nativeElement.value == 'user1') {
          this.apiService.isLoggedIn=true;
          this.router.navigate(['/home']);
        }
      }
      else{
        alert("email or password is incorrect")
      }
    }
  }

}
