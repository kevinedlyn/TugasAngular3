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
  hasilDone = false;

  1()
  {
    if (this.num1 == false)
    {
      this.number1 = 1;
      this.num1 = true;
    }
    else
    {
      this.number2 = 1;
    }
  }
  2()
  {
    if (this.num1 == false)
    {
      this.number1 = 2;
      this.num1 = true;
    }
    else
    {
      this.number2 = 2;
    }
  }
  3()
  {
    if (this.num1 == false)
    {
      this.number1 = 3;
      this.num1 = true;
    }
    else
    {
      this.number2 = 3;
    }
  }
  4()
  {
    if (this.num1 == false)
    {
      this.number1 = 1;
      this.num1 = true;
    }
    else
    {
      this.number2 = 1;
    }
  }
  5()
  {
    if (this.num1 == false)
    {
      this.number1 = 5;
      this.num1 = true;
    }
    else
    {
      this.number2 = 5;
    }
  }
  6()
  {
    if (this.num1 == false)
    {
      this.number1 = 6;
      this.num1 = true;
    }
    else
    {
      this.number2 = 6;
    }
  }
  7()
  {
    if (this.num1 == false)
    {
      this.number1 = 7;
      this.num1 = true;
    }
    else
    {
      this.number2 = 7;
    }
  }
  8()
  {
    if (this.num1 == false)
    {
      this.number1 = 8;
      this.num1 = true;
    }
    else
    {
      this.number2 = 8;
    }
  }
  9()
  {
    if (this.num1 == false)
    {
      this.number1 = 9;
      this.num1 = true;
    }
    else
    {
      this.number2 = 9;
    }
  }
  plus()
  {
    this.operator = "+";
  }
   div()
  {
    this.operator = "/";
  }
   mul()
  {
    this.operator = "*";
  }
   minus()
  {
    this.operator = "-";
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

}
