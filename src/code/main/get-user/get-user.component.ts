import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-user',
  standalone: true,
  imports: [],
  templateUrl: './get-user.component.html',
  styleUrl: './get-user.component.scss'
})
export class GetUserComponent implements OnInit {

  private _http = inject(HttpClient)
  public users= []



  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this._http.get('http://localhost:3000/users/getUsers').subscribe((resp : any) =>{
      this.users = resp?.users

      console.log(this.users)
    })
  }

}
