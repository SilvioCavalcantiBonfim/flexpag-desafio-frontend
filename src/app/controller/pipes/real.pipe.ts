import { Pipe, PipeTransform } from "@angular/core";

/*
    Pipe responsavel por converter qualquer valor numerico em uma string.
    
    Ex.: 10000.2 -> '10.000,20'
*/ 

@Pipe({name: 'real'})
export class realPipe implements PipeTransform {
    transform(value: number) {
        return value.toLocaleString('US', {minimumFractionDigits: 2,maximumFractionDigits:2});
    }
}