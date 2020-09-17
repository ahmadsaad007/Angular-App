import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  inputValue:string = '';
  counter:number = 0;
  blueText:string = '';

  onIncreaseClick(){
    this.counter++;
    if(this.counter==5){
      this.blueText = 'blue';
    }
    console.log('Increase Button Click');
  }
  onClick(){
    //this.inputValue = '';
  }
}
