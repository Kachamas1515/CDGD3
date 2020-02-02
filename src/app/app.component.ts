import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  name = '';

  onComponentChange(event) {
    console.log('fromAppcomponent', event);
  }
  inputChange(event: any) {
    this.name = event;
    console.log('event', event);
  }
}
