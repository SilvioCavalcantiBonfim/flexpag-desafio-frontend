import { ano, fipe, marca, modelo, result } from "../interfaces/parallelum.interface";

/*
    Classe responsável por armazenar as informações passadas pelo usuário e recebidas da
    API por meio de requisições GET.

    Também executa a regra de negócio por meio do método 'currentState' retornando um objeto
    do tipo result com um estado (state) e o cálculo do percentual de variação do valor (result).

    state - refere ao estado do percentual resultante
        - 0 - Valor do veículo abaixo da tabela FIPE
        - 1 - Valor do veículo na média da tabela FIPE
        - 2 - Valor do veículo acima da tabela FIPE
    result - refere ao valor absoluto do percentual
*/

export class query {
    private VehicleType: string | undefined;
    private Brand: marca | undefined;
    private Model: modelo | undefined;
    private Year: ano | undefined;
    private Value: number = 0;
    private Fipe: fipe | undefined;

    constructor() { }

    public setFipe(v: fipe) {
        this.Fipe = v;
    }

    public setType(v: string) {
        this.VehicleType = v;
    }


    public setBrand(v: marca) {
        this.Brand = v;
    }


    public setModel(v: modelo) {
        this.Model = v;
    }


    public setYear(v: ano) {
        this.Year = v;
    }

    public setValue(v: number) {
        this.Value = v;
    }

    public get type(): any {
        return this.VehicleType;
    }


    public get brand(): any {
        return this.Brand;
    }

    public get model(): any {
        return this.Model;
    }


    public get year(): any {
        return this.Year;
    }

    public get value(): any {
        return this.Value;
    }


    public get fipe(): any {
        return this.Fipe;
    }


    public resetUntilBrand(): void {
        this.Brand = undefined;
        this.Model = undefined;
        this.Year = undefined;
    }

    public resetUntilModel(): void {
        this.Model = undefined;
        this.Year = undefined;
    }

    public resetUntilYear(): void {
        this.Year = undefined;
    }

    public currentState(): result {
        if (this.Fipe === undefined) {
            return { state: 0, result: 0 }
        } else {
            const currentResult = (this.value - this.Fipe.ValorNumerico) / this.Fipe.ValorNumerico;
            return {
                state: Number(currentResult > -0.1 && currentResult < 0.1) + 2 * Number(currentResult >= 0.1),
                result: Math.abs(currentResult) * 100
            }
        }
    }
}