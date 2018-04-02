import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .white {
    color: white;
  }
  `]

})
export class AppComponent {
  hideText = false;
  ShowMe = "Show me please";
  log = [];


  onShowMeText(){
    this.hideText = !this.hideText
    this.log.push(new Date());
  }
}
