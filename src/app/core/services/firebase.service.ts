import { Injectable, Inject } from '@angular/core';
import { FirebaseListObservable, AngularFire, FirebaseApp } from 'angularfire2';
import { Message } from '../../models/message';
import { MaterializeService } from '../services/materialize.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FirebaseService {

  private messages: FirebaseListObservable<any[]>;
  private base = '/FireChat/';
  private messageSource = new BehaviorSubject<FirebaseListObservable<any[]>>(this.messages);
  public message$ = this.messageSource.asObservable();

  constructor( @Inject(FirebaseApp) private firebaseApp: firebase.app.App,
    private angularfire: AngularFire,
    private materializeService: MaterializeService) { }

  init(channelName: string) {
    this.messages = this.angularfire.database.list(`${this.base}/${channelName}`);
    this.messages.subscribe(res => this.messageSource.next(res as any));
  }

  sendMessage(message: Message) {
    return this.messages.push(message);
  }
}
