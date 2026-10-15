import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

@Component({
  imports: [RouterOutlet, Header, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal(AppName());
  protected readonly description = signal('Angular App for Learning Perpose.');
  protected readonly paragraph = 'This is a simple paragraph.';
}


function AppName() {
  return "Angular Aapp";
}
