import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Todo } from '@nx-tutorial/data';

@Component({
  selector: 'nx-tutorial-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

  // added this to fix the old unit tests that the tutorial wanted to be deleted
  title: string = 'todos';

  constructor(private http: HttpClient){
    this.fetch();
  }

  fetch(){
    this.http.get<Todo[]>('/api/todos').subscribe(t => {
      (this.todos = t)
      console.log('AppComponent: fetch: t:',t);

    });
  }

  addTodo() {
    /*
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`
    });
    */

    this.http.post('/api/addTodo', {}).subscribe(() => {
      this.fetch();
    });
  }
}
