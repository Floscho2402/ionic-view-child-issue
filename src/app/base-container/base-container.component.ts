import { Component, DestroyRef, inject, ViewChild } from '@angular/core';
import { IonContent, ViewDidEnter } from '@ionic/angular';
import { distinctUntilChanged, map, Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-base-container',
  template: '',
  standalone: true
})
export class BaseContainerComponent implements ViewDidEnter {
  @ViewChild(IonContent) content!: IonContent;

  protected readonly destroyRef: DestroyRef = inject(DestroyRef);

  public ionViewDidEnter(): void {
    if (this.content) {
      this.content.scrollToTop();

      this.content.ionScroll
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        map(ev => ev.detail.scrollTop),
        distinctUntilChanged()
      )
      .subscribe(event => {
        console.log('DEBUG scroll event:', event);
      });
    }
  }
}
