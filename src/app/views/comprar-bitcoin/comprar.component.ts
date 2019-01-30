import {Component, OnInit} from '@angular/core';
import {RateService} from "../../core/services/rate.service";
import {validate} from "codelyzer/walkerFactory/walkerFn";

declare var $: any;
let test: any;

@Component({
    selector: 'app-comprar',
    templateUrl: 'comprar.component.html',
    providers: [RateService],
    styles: []
})

export class ComprarComponent implements OnInit {
    rate: any = {value: ''};
    value: string;


    constructor(
        private rateService: RateService,
    ) {
        /**this.rate =  this.rateService.getRate().toPromise().then((data: {}) => {
            //console.log(data);
            this.rate = data;
            this.value = this.rate["value"];
        });*/

    }


    async getRate() {
        this.rate = await this.rateService.getRate().toPromise().then((data: {}) => {
            //console.log(data);
            this.rate = data;
            this.value = this.rate["value"];
        });
        console.log('No issues, I will wait until promise is resolved..');
        console.log(this.value);
    }

    ngOnInit(): void {

    }


    async ngAfterViewInit() {
        this.rate = await this.rateService.getRate().toPromise().then((data: {}) => {
            //console.log(data);
            this.rate = data;
            this.value = this.rate["value"];
        });
        console.log('No issues, I will wait until promise is resolved..');
        //console.log(this.value);
        let test = this;
        $(document).ready(
            function () {
                console.log(test.value);
                //console.log(test.value);
                $.each(['basic', 'default', 'slide', 'fade', 'appendTo',
                    'no-filtering', 'html'], function (i, id) {
                    var $place = $('#' + id + '-place');
                    var $select = $('#base').clone().attr("id", "real").attr(
                        "name", "valorPagamento").attr("data-thousands",
                        ".").attr("data-decimal", ",").attr("data-prefix",
                        "R$ ").removeAttr('base').appendTo($place);
                    if (id != 'basic')
                        $select.find('option:selected').removeAttr('selected');
                    $select.editableSelect($place.data());
                });

                $('#select').editableSelect().on(
                    'select.editable-select',
                    function (e, li) {
                        $('#last-selected').html(
                            li.val() + '. ' + li.text());
                    });
                $('#real').on(
                    'keydown',
                    function () {
                        setTimeout(function () {
                            var $real = $("#real").val().replace("R$", "")
                                .replace(",", ".");
                            var $valorbtc = $real / parseInt(test.value);
                            $('#btc').val(
                                $valorbtc.toLocaleString('pt-BR', {
                                    maximumSignificantDigits: 6
                                }));
                        }, 0);
                    });
                $('#btc').on('keydown', function () {
                    setTimeout(function () {
                        var $btc = $("#btc").val().replace(",", ".") * parseInt(test.value);
                        var $brl = "R$ ";
                        $('#real').val($brl + $btc.toLocaleString('pt-BR', {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2
                        }));
                    }, 0);
                });

                $("#real").focusout(function () {
                    setTimeout(function () {
                        //var $real = $("#real").val().replace("R$", "")
                        //		.replace(",", ".");
                        //var $valorbtc = $real / ${cotacaoCompraSemBRL};
                        var $real = parseInt($("#real").val().replace("R$", "").replace('.', '').replace(' ', ''));
                        //console.log($(test));
                        var $valorbtc = ($real * 100000000) / (parseInt(test.value) * 100000000);
                        $('#btc').val($valorbtc.toLocaleString('pt-BR', {
                            maximumSignificantDigits: 6
                        }));
                    }, 0);
                });

                $("#real").maskMoney();

            });

    }

}
