import { Component, OnInit, DoCheck } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { AngularFire } from 'angularfire2';

import { TradeService } from '../services/trade/trade.service';
import { OrderAction } from '../services/trade/order-action'

@Component({
    selector: 'app-sell-box',
    templateUrl: './sell-box.component.html',
    styleUrls: ['../buy-box/buy-box.component.css']
})
export class SellBoxComponent implements OnInit, DoCheck {

    private sellForm: FormGroup;

    private amount = 2;
    private rate = 3;
    private total: number;

    constructor(private _af: AngularFire, private _tradeService: TradeService) { 
      this.sellForm = new FormGroup({
            sellAmount: new FormControl('0', Validators.compose([Validators.required, this.isValidNumber])),
            sellRate: new FormControl('0', Validators.compose([Validators.required, this.isValidNumber])),
            sellTotal: new FormControl({ value: '0', disabled: true }, Validators.compose([Validators.required, this.isValidNumber]))
        })
    }

    ngOnInit() { }

    ngDoCheck(): void {
        this.total = this.amount * this.rate;
    }

    placeAskOrder() {
        console.log("amount: ", this.amount);
        console.log("rate: ", this.rate);
        console.log("total: ", this.total);
        console.log(this.sellForm.value);

        this._tradeService.onOrder(
            this.amount,
            this.rate,
            OrderAction.ASK,
            this._af.auth.getAuth().uid);

        return false;
    }

    isValidNumber(control: FormControl): { [s: string]: boolean } {
        if (isNaN(+control.value) || +control.value <= 0) {
            // console.log("Not a valid positive number: ", control.value);
            return { notAPositiveNumber: true }
        }
    }
}