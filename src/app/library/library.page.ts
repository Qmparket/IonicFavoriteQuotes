import { Component, OnInit } from '@angular/core';
import { Quote } from '../data/quote.interface';
import { QuoteService } from '../shared/services/quote.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {

  quoteCollection: {category: string, quotes: Quote[], icon: string}[];

  constructor (private quoteService: QuoteService, private route: Router) {}
  ngOnInit() {
    this.quoteCollection = this.quoteService.quotes;
  }

  openQuotes(quotes: Quote[]) {
    this.quoteService.chosenQuotes = quotes;
    console.log(this.quoteService.chosenQuotes);
    this.route.navigateByUrl('tabs/library/quotes');
  }

}
