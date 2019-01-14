import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // <app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: any[] = [];

  constructor() {
    this.todos.push({
      title: 'Passear com o cachorro',
      done: false
    });
    this.todos.push({
      title: 'Ir ao supermercado',
      done: false
    });
  }
}
