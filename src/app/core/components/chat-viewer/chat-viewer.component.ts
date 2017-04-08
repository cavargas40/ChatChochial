import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase';
import { FirebaseService } from '../../services/firebase.service';
import { MaterializeService } from '../../services/materialize.service';
import { Message } from '../../../models/message';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-chat-viewer',
  templateUrl: './chat-viewer.component.html',
  styleUrls: ['./chat-viewer.component.css']
})
export class ChatViewerComponent implements OnInit, OnDestroy {

  public isLoading = true;
  public isActive = false;
  private chatMessages: FirebaseListObservable<any[]>;

  messages: any[] = [];
  message: Message = new Message();  
  channels: string[] = ['Selecciona un canal','General', 'Ocio', 'Ñoñadas', 'Otro'];

  avatar: string;
  name: string = '';
  messageText: string;  
  channel: string;


  @ViewChild('chatContainer') private myScrollContainer: ElementRef;
  subscription: Subscription;

  constructor(private firebaseService: FirebaseService,
    private materializeService: MaterializeService) { }

  ngOnInit() {    
    this.isLoading = false;
    this.avatar = this.avatarCreator();    
    this.channel = 'Selecciona un canal';
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  scrollToBottom() {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {
      this.materializeService.toast(err, 4000);
    }
  }

  sendMessage() {
    this.message.app_user_name = this.name;
    this.message.text = this.messageText;
    this.message.timestamp = firebase.database.ServerValue.TIMESTAMP;
    this.message.img = this.avatar;
    this.firebaseService.sendMessage(this.message);
    this.messageText = '';
  }

  trackByKey(index: number, message: any): number { return message.$key; }


  avatarCreator() {
    let random = Math.floor((Math.random() * 1000) + 1);

    return `https://api.adorable.io/avatars/${random}/`;
  }

  chatActivate() {
    if (!(this.name.trim() === '') && this.channel !== 'Selecciona un canal') {
      this.isActive = true;
      this.isLoading = true;
      this.firebaseService.init(`${this.channel}/messages`);
      this.subscription = this.firebaseService.message$.subscribe(res => {
        if (res && this.isActive) {
          this.chatMessages = res;
          setTimeout(() => this.scrollToBottom(), 500);
        }
        this.isLoading = false;
      });
      return;
    }
    this.materializeService.toast('Ingresa un nombre y selecciona un canal, para empezar a utilizar este maravilloso chat!');
  }

}
