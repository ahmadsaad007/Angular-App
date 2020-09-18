import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  inputValue:string = '';
  count = 0;
  counter: Array<number> = [];
  // blueText:string = '';
  isButtonVisible = false;

  onIncreaseClick(){
    this.counter.push(this.count++);
    this.isButtonVisible = !this.isButtonVisible;
    // if(this.count==5){
    //   this.blueText = 'blue';
    // }
    console.log('Increase Button Click');
  }
  // onClick(){
  //   //this.inputValue = '';
  // }
  getColor(number){
    if(number>4){
      return 'blue';
    }
    else{
      return 'white';
    }
  }
  getText(num){
    if(num>4){
      return 'white';
    }
    else{
      return 'black';
    }
  }
}
