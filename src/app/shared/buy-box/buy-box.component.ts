import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AngularFire } from 'angularfire2';

import { TradeService } from '../services/trade/trade.service'
import { OrderAction } from '../services/trade/order-action'

@Component({
    selector: 'app-buy-box',
    templateUrl: './buy-box.component.html',
    styleUrls: ['./buy-box.component.css']
})
export class BuyBoxComponent implements OnInit, DoCheck {

    private buyForm: FormGroup;

    private amount = 2;
    private rate = 3;
    private total: number;

    constructor(private _af: AngularFire, private _tradeService: TradeService) { }

    ngOnInit() {
        this.buyForm = new FormGroup({
            buyAmount: new FormControl('0', Validators.compose([Validators.required, this.isValidNumber])),
            buyRate: new FormControl('0', Validators.compose([Validators.required, this.isValidNumber])),
            buyTotal: new FormControl({ value: '0', disabled: true }, Validators.compose([Validators.required, this.isValidNumber]))
        })
    }

    ngDoCheck(): void {
        this.total = this.amount * this.rate;
    }

    placeBidOrder() {
        console.log("amount: ", this.amount);
        console.log("rate: ", this.rate);
        console.log("total: ", this.total);
        console.log(this.buyForm.value);

        this._tradeService.onOrder(
            this.amount,
            this.rate,
            OrderAction.BID,
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