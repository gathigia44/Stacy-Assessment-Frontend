import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class PhoneNumber {
  constructor(
    public id: number,
    public name: string,
    public phone: string,
    public country: string,
    public countryCode: string,
    public state: string
  ) {
  }
}


@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
phoneNumber: PhoneNumber[];

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.getPhone();
  }

  getPhone(){
    this.httpClient.get<any>('http://localhost:8080/numbers/getNumbers').subscribe(
      response => {
        console.log(response);
        this.phoneNumber = response;
      }
    );
  }

}
