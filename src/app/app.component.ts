import { Component } from '@angular/core';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customers = [
    { name: 'Adam', age: 23 },
    { name: 'Jack', age: 27 },
    { name: 'Katherin', age: 26 },
    { name: 'John', age: 30 },
    { name: 'Watson', age: 42 },
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.customers, event.previousIndex, event.currentIndex);
    this.pre = JSON.stringify(this.customers, null, ' ');
  }

  markdown = `
# Material / Angular 7 / drag-and-drop list

requires:
- \`CdkDragDrop\` and \`moveItemInArray\` imports
- \`cdkDropList\` directive and \`cdkDropListDropped\` event
- CSS \`flex\` layout
`;

  pre = JSON.stringify(this.customers, null, ' ');
}
