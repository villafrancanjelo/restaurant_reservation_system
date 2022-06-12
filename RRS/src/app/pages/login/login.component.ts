import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any =FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  loginSubmit(data:any){
    
  }

}
