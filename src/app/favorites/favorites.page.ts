import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../shared/services/quote.service';
import { Quote } from '../data/quote.interface';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../shared/modal/modal.page';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  quotes: Quote[];
  constructor(private quoteService: QuoteService, private modalController: ModalController) {
    this.quoteService.favoriteQuotes.subscribe((quotes) => {
      this.quotes = quotes;
    });
   }
  ngOnInit() {
  }

  async presentModal(quote: Quote) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {quote: quote}
    });
    return await modal.present();
  }

  unfavorite(quote: Quote) {
    this.quoteService.removeFavorite(quote);
  }

}
