
import { Component } from '@angular/core';

import { Model, TodoItem } from "./model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'prffoyecto';
  model = new Model();
  getName() {
    return this.model.user;
  }
  getItems(){
    return this.model.items.filter(item => !item.done);
    // return this.model.items;
  }
  addItem(newItem) {
    if (newItem != "") {
      this.model.items.push(new TodoItem(newItem, false));
    }
  }
}
