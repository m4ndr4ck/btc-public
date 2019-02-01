import {Component, OnInit} from '@angular/core';
import {RateService} from "../../core/services/rate.service";

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
