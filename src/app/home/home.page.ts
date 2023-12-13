import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import {
  IonContent,
  IonHeader, IonList,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

import { DataService, Message } from '../services/data.service';
import { BaseContainerComponent } from '../base-container/base-container.component';
import { NgFor } from '@angular/common';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [MessageComponent, NgFor, IonContent, IonHeader, IonToolbar, IonTitle, IonRefresher, IonRefresherContent, IonList]
})
export class HomePage extends BaseContainerComponent {
  private data = inject(DataService);

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }
}
