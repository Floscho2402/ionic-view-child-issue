import { Component, inject } from '@angular/core';
import { IonicModule, RefresherCustomEvent } from '@ionic/angular';

import { DataService, Message } from '../services/data.service';
import { BaseContainerComponent } from '../base-container/base-container.component';
import { NgFor } from '@angular/common';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, MessageComponent, NgFor]
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
