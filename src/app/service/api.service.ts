import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8080';
  isLoggedIn = false;

  constructor(private http: HttpClient) {}

  postNewAccount(data: any) {
    return this.http.post<any>(`${this.baseUrl}/profile`, data).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getallAccount() {
    return this.http.get<any>(`${this.baseUrl}/profile/`).pipe(
      map((res) => {
        return res;
      })
    );
  }

  deleteUser(id:any){
    return this.http.delete(`${this.baseUrl}/profile/${id}`)
  }

  editUser(id:any,form:any){
    return this.http.put<any>(`${this.baseUrl}/profile/${id}`,{name:form.name,age:form.age,degree:form.degree})
  }


}
