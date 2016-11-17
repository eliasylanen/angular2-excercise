import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: any[] = [
    {name: 'Do laundry', done: false},
    {name: 'Clean room', done: true},
  ];

  name: string = null;

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.todos.push({name: this.name, done: false});
    this.name = null;
  }
}
