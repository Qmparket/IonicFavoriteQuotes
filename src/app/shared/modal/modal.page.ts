import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Quote } from 'src/app/data/quote.interface';
import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() quote: Quote;

  constructor(private modalController: ModalController,
              private quoteService: QuoteService ) { }

  ngOnInit() {
    console.log(this.quote);
  }

  dismiss() {
    this.modalController.dismiss();
  }
  unfavorite() {
    this.quoteService.removeFavorite(this.quote);
    this.dismiss();
  }

}
