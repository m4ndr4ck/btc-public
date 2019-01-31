import {Component, OnInit} from '@angular/core';
import {RateService} from "../../core/services/rate.service";

declare var $: any;
let test: any;

@Component({
    selector: 'app-comofunciona',
    templateUrl: 'comoFunciona.component.html',
    providers: [RateService],
    styles: []
})

export class ComoFuncionaComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    async ngAfterViewInit() {
    }
}
