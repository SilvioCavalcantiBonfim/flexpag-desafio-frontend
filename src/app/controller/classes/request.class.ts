import { HttpClient } from "@angular/common/http";
import { ano, fipe, marca, modelo, modelos } from "../interfaces/parallelum.interface";
import { query } from "./query.class";

/*
    É uma super classe que estende a query responsável por popular a variável fipe da classe
    query, popular as arrays AllBrands (marcas), AllModels (modelos), AllYears (ano) por meio
    de requisições GET que são apenas executadas quando permitidas.

    As arrays obedecem às interfaces relativas às requisições testadas com antecedencia com o 
    Postman e as informações passadas no scopo do desafio.
*/ 

export class request extends query {

    private AllTypes: string[] = ['carros', 'motos', 'caminhões']
    private AllBrands: marca[] = [];
    private AllModels: modelo[] = [];
    private AllYears: ano[] = [];

    constructor(private http: HttpClient) {
        super();
    }
    
    // getter
    public get allTypes(): string[] {
        return this.AllTypes;
    }

    public get allBrands(): marca[] {
        return this.AllBrands;
    }

    public get allModels(): modelo[] {
        return this.AllModels;
    }

    public get allYears(): ano[] {
        return this.AllYears;
    }

    //updates
    public updateBrandsList(): void {
        //so permite a requisição get se um tipo de veiculo for escolhido
        if (this.type === undefined) return
        //Reinia as listas
        /*quando não reinia as listas pode ocorrer um erro em requisições futuras devido a natureza assincrona das requisições http/https*/
        this.AllBrands = [];
        this.AllModels = [];
        this.AllYears = [];
        this.resetUntilBrand();
        //monta a url de requisição
        const urlRequestGet = `https://parallelum.com.br/fipe/api/v1/${this.type.replace('õ', 'o')}/marcas`;
        //eefetua o GET
        this.http.get<marca[]>(urlRequestGet).subscribe({
            next: (r) => this.AllBrands = r
        });
    }

    public updateModelsList(): void {
        if (this.type === undefined || this.brand === undefined) return
        this.AllModels = [];
        this.AllYears = [];
        this.resetUntilModel();
        const urlRequestGet = `https://parallelum.com.br/fipe/api/v1/${this.type.replace('õ', 'o')}/marcas/${this.brand?.codigo}/modelos`;
        this.http.get<modelos>(urlRequestGet).subscribe({
            next: r => this.AllModels = r.modelos
        });
    }

    public updateYearsList(): void {
        if (this.type === undefined || this.brand === undefined || this.model === undefined) return
        this.AllYears = [];
        this.resetUntilYear();
        const urlRequestGet = `https://parallelum.com.br/fipe/api/v1/${this.type.replace('õ', 'o')}/marcas/${this.brand?.codigo}/modelos/${this.model?.codigo}/anos`;
        this.http.get<ano[]>(urlRequestGet).subscribe({
            next: r => this.AllYears = r
        });
    }

    public updateFipe(): void {
        if (this.type === undefined || this.brand === undefined || this.model === undefined || this.year === undefined)return
        const urlRequestGet = `https://parallelum.com.br/fipe/api/v1/${this.type.replace('õ', 'o')}/marcas/${this.brand?.codigo}/modelos/${this.model?.codigo}/anos/${this.year.codigo}`;
        this.http.get<fipe>(urlRequestGet).subscribe({
            next: (r) => {
                //converte a string recebida do valor para numerica
                const value = Number(r.Valor.substr(3).replaceAll('.', '').replace(',', '.'));
                this.setValue(value);
                this.setFipe({ ...r, ValorNumerico: value });
            }
        });
    }
}