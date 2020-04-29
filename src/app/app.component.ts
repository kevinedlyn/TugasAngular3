import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  number1 = 0;
  number2 = 0;
  hasil = 0;
  operator = "";
  num1 = false;
  opeFound = false;
  num2 = false;
  hasilDone = false;
  operasi="";

  get1()
  {
    if (this.num1 == false)
    {
      this.number1 = 1;
      this.operasi = this.operasi + this.number1;
      this.num1 = true;
    }
    else
    {
      this.number2 = 1;
      this.operasi = this.operasi + this.number2;
      this.num2 = true;
    }
  }
  get2()
  {
    if (this.num1 == false)
    {
      this.number1 = 2;
      this.operasi = this.operasi + this.number1;
      this.num1 = true;
    }
    else
    {
      this.number2 = 2;
      this.operasi = this.operasi + this.number2;
      this.num2 = true;
    }
  }
  get3()
  {
    if (this.num1 == false)
    {
      this.number1 = 3;
      this.operasi = this.operasi + this.number1;
      this.num1 = true;
    }
    else
    {
      this.number2 = 3;
      this.operasi = this.operasi + this.number2;
      this.num2 = true;
    }
  }
  get4()
  {
    if (this.num1 == false)
    {
      this.number1 = 4;
      this.operasi = this.operasi + this.number1;
      this.num1 = true;
    }
    else
    {
      this.number2 = 4;
      this.operasi = this.operasi + this.number2;
      this.num2 = true;
    }
  }
  get5()
  {
    if (this.num1 == false)
    {
      this.number1 = 5;
      this.operasi = this.operasi + this.number1;
      this.num1 = true;
    }
    else
    {
      this.number2 = 5;
      this.operasi = this.operasi + this.number2;
      this.num2 = true;
    }
  }
  get6()
  {
    if (this.num1 == false)
    {
      this.number1 = 6;
      this.operasi = this.operasi + this.number1;
      this.num1 = true;
    }
    else
    {
      this.number2 = 6;
      this.operasi = this.operasi + this.number2;
      this.num2 = true;
    }
  }
  get7()
  {
    if (this.num1 == false)
    {
      this.number1 = 7;
      this.operasi = this.operasi + this.number1;
      this.num1 = true;
    }
    else
    {
      this.number2 = 7;
      this.operasi = this.operasi + this.number2;
      this.num2 = true;
    }
  }
  get8()
  {
    if (this.num1 == false)
    {
      this.number1 = 8;
      this.operasi = this.operasi + this.number1;
      this.num1 = true;
    }
    else
    {
      this.number2 = 8;
      this.operasi = this.operasi + this.number2;
      this.num2 = true;
    }
  }
  get9()
  {
    if (this.num1 == false)
    {
      this.number1 = 9;
      this.operasi = this.operasi + this.number1;
      this.num1 = true;
    }
    else
    {
      this.number2 = 9;this.num2 = true;
      this.operasi = this.operasi + this.number2;

    }
  }
  plus()
  {
    this.operator = "+";
    this.operasi = this.operasi + this.operator;
    this.opeFound = true;
  }
   div()
  {
    this.operator = "/";
        this.operasi = this.operasi + this.operator;
    this.opeFound = true;
  }
   mul()
  {
    this.operator = "*";
        this.operasi = this.operasi + this.operator;
    this.opeFound = true;
  }
   minus()
  {
    this.operator = "-";
        this.operasi = this.operasi + this.operator;
    this.opeFound = true;
  }
  hitung()
  {
    if (this.operator == "+")
    {
      this.hasil = this.number1 + this.number2;
    }
    else if (this.operator == "-")
    {
      this.hasil = this.number1 - this.number2;
    }
    else if (this.operator == "/")
    {
      this.hasil = this.number1 / this.number2;
    }
    else if (this.operator == "*")
    {
      this.hasil = this.number1 * this.number2;
    }
    this.hasilDone = true;
  }
  reset()
  {
    this.hasilDone = false;
    this.num1 = false;  
    this.operasi="";
  }
}
