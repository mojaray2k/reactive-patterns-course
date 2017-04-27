import { Observable } from 'rxjs/Observable';

export function initObservable() {
    // tslint:disable-next-line:no-trailing-whitespace
    
    const keys$ = Observable.fromEvent(document, 'keyup')
                    .do((keyUp: KeyboardEvent) => console.log(keyUp.key));
    keys$.subscribe();


// tslint:disable-next-line:eofline
}