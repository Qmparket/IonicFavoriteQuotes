import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quote } from '../data/quote.interface';
import { QuoteService } from '../shared/services/quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {

  quotes: Quote[];
  constructor(private route: Router, private quoteService: QuoteService) {

   }

  ngOnInit() {
    this.quotes = this.quoteService.chosenQuotes;
  }
  favorite(quote: Quote) {
    quote.favorite = !quote.favorite;
    if (quote.favorite) {
      this.quoteService.addFavorite(quote);
    } else {
      this.quoteService.removeFavorite(quote);
    }
  }

  goBack() {
    console.log('asdasd');
    this.route.navigateByUrl('tabs/library');
  }

}
