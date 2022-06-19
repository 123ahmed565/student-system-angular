import { Component, OnInit, OnChanges, SimpleChange} from '@angular/core';
import { window } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: any[] = [];
  user: any | null = null;

  constructor(
    private apiService: ApiService,
    private router:Router,
  ) {

  }



  ngOnInit(): void {

    this.apiService.getallAccount().subscribe(
      (res) => {
        console.log(res);
        this.user = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  post(form:any){
    console.log(form.value);
    let message  = form.value;
    let data: any = {
      name: message.name,
      age: message.age,
      degree: message.degree,

      id: Math.floor(Math.random() * 1000),
    };

    this.apiService.postNewAccount(data).subscribe(
      ()=> {
      alert(`done`);
      },
      (err) => console.log(err)
      );
      location.reload();
  }
  edit(user:any,form:any){
    console.log(form.value);
    let message  = form.value;
    let age=user.age;
    let name=user.name;
    let degree=user.degree;

    if(message.age){

      age=message.age
    }
    if(message.name){
      name=message.name

    }
    if(message.degree){
      degree=message.degree

    }

    let data: any = {
      age: age,
      name: name,

      degree:degree,

    };

    this.apiService.editUser(user.id,data).subscribe(
      ()=> {alert(`done`); },
      (err) => console.log(err)
    );
    location.reload();
  }




  delete(id:any) {
    console.log(id);

    this.apiService.deleteUser(id).subscribe(
      ()=> {alert(`deleted`); },
      (err) => console.log(err)
    );
    // location.reload();

  }



}
