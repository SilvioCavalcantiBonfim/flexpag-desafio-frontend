import { Pipe, PipeTransform } from "@angular/core";

/*
    Pipe responsavel por converter a string MesReferencia que vem no formato '{mês} de {ano} '
    em '{numero do mês}/{ano}'.

    Ex.: 'janeiro de 2023 ' -> '01/2023'
*/ 

@Pipe({name: 'MonthRef'})
export class monthPipe implements PipeTransform {
    transform(value: string) {
        var rt: string = '';
        try {
            const fragments: string[] = value.split(' ');
            const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
            const month = months.indexOf(fragments[0].toLowerCase())+1;
            rt = `${(month>9)?'':'0'}${month.toFixed(0)}/${fragments.at(-2)}`
        } catch (error) {}
        return rt;
    }
}