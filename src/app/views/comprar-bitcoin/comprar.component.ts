import { Component, OnInit } from '@angular/core';

declare var $ : any

@Component({
    selector: 'app-comprar',
    templateUrl: 'comprar.component.html',
    styles: []
})
export class ComprarComponent implements OnInit {
    name: string;
    email: string;
    message: string;

    constructor() {}

    ngOnInit() {}

    ngAfterViewInit() {
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


            });
    }

    /**
     * Process the form we have. Send to whatever backend
     * Only alerting for now
     */
    processForm() {
        const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
        alert(allInfo);
    }

}
