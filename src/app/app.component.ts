import {Component, OnInit} from '@angular/core';
import { initObservable } from 'app/init-observable';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent  {

    title = 'app works!';

    constructor() {
        initObservable();
    }

}