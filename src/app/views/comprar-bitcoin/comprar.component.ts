import { Component, OnInit } from '@angular/core';
import {RateService} from "../../core/services/rate.service";

declare var $ : any

@Component({
    selector: 'app-comprar',
    templateUrl: 'comprar.component.html',
    providers:  [ RateService ],
    styles: []
})
export class ComprarComponent implements OnInit {
    rate:any = { value: ''};
    test: string;

    constructor(
        private rateService: RateService,
    ) {}

    ngOnInit(){
        this.getRate();
    }

    getRate() {
        this.rateService.getRate().subscribe((data: {}) => {
            console.log(data);
            this.rate = data;
            this.test = this.rate["value"];

        });
    }



    ngAfterViewInit() {
        let jQueryInstance = this;
        console.log(jQueryInstance.test);
        $(document).ready(
            function() {
                $.each([ 'basic', 'default', 'slide', 'fade', 'appendTo',
                    'no-filtering', 'html' ], function(i, id) {
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
                    function(e, li) {
                        $('#last-selected').html(
                            li.val() + '. ' + li.text());
                    });
                $('#real').on(
                    'keydown',
                    function() {
                        setTimeout(function() {
                            var $real = $("#real").val().replace("R$", "")
                                .replace(",", ".");
                            var $valorbtc = $real / 15000;
                            $('#btc').val(
                                $valorbtc.toLocaleString('pt-BR', {
                                    maximumSignificantDigits : 6
                                }));
                        }, 0);
                    });
                $('#btc').on('keydown', function() {
                    setTimeout(function() {
                        var $btc = $("#btc").val().replace(",", ".") * 15000;
                        var $brl = "R$ ";
                        $('#real').val($brl + $btc.toLocaleString('pt-BR', {
                            maximumFractionDigits : 2,
                            minimumFractionDigits : 2
                        }));
                    }, 0);
                });

                $("#real").focusout(function() {
                    setTimeout(function() {
                        //var $real = $("#real").val().replace("R$", "")
                        //		.replace(",", ".");
                        //var $valorbtc = $real / ${cotacaoCompraSemBRL};
                        var $real = parseInt($("#real").val().replace("R$", "").replace('.','').replace(' ',''));
                        console.log(this.test);
                        var $valorbtc = ($real*100000000)/(this.test*100000000);
                        $('#btc').val($valorbtc.toLocaleString('pt-BR', {
                            maximumSignificantDigits : 6
                        }));
                    }, 0);
                });

                $("#real").maskMoney();

            });
    }

}
