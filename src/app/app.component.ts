import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // property binding

  title: string = "swarn";
  imgSrc: string = "https://yt3.ggpht.com/a/AATXAJy8stJvLJrN0cleHvkBG4hVDcCMy3p47CZTWWtk=s900-c-k-c0xffffffff-no-rj-mo";

  constructor() {
    
  }
}
