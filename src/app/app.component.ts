import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HOMEComponent } from './PAGES/home/home.component';
import { QuizzComponent } from './COMPONENTS/quizz/quizz.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    QuizzComponent,
    HOMEComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-buzzfeed';
}
