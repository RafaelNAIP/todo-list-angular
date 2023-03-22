import { Component } from "@angular/core";

import { todos } from "../todos";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
})
export class ListComponent {
    todos = todos

    completeTodo() {
        window.alert('Todo completed')
    }

    onAddDescription() {
        window.alert('You cannot add description yet!')
    }
}