import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public clarifications: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    // Get the array of objects
    this.clarifications = db.list('clarifications');
  }
}
