import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { IonicModule, Platform } from '@ionic/angular';
import { Message } from '../services/data.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IonicModule,
    NgIf
  ]
})
export class MessageComponent {
  private platform = inject(Platform);
  @Input() message?: Message;
  isIos() {
    return this.platform.is('ios')
  }
}
