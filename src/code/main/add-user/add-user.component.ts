import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { sample } from 'rxjs';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {

  public addUserForm !: FormGroup ;

  private _fb = inject(FormBuilder);
  private _http = inject(HttpClient);
  public notifyUser : boolean = false;
  public message : string = ''

  ngOnInit(){
    this.initForm()
  }

  private initForm(){
    this.addUserForm = this._fb.group({
      username : [, Validators.required] ,
      role : [, Validators.required] ,
      salary : [ , Validators.required]
    })
  }


  public addUser(){
     this.notifyUser = false ;
     this._http.post('http://localhost:3000/users/add' , this.addUserForm.getRawValue()).subscribe((resp)=>{
        this.notifyUser = true ;
        this.message = "User Added to DB";
        this.resetControl();
     },
     (err)=>{
        this.notifyUser = true ;
        this.message = "Error while adding data to DB"
     })
  }


  private resetControl(){
    this.addUserForm.reset()
  }



}
