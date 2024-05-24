import { Component } from '@angular/core';
import { connectDB } from './services/db.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'] 
})
export class AppComponent {
  constructor() {
    connectDB();
  }
}
