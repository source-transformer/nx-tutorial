import { Component } from '@angular/core';

interface Todo {
  title: string;
}

@Component({
  selector: 'nx-tutorial-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

  // added this to fix the old unit tests that the tutorial wanted to be deleted
  title: string = 'todos';

  constructor(){

  }

  addTodo() {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`
    });
  }
}
