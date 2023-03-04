/*
=============================================================
Interfaces para a comunicação com a API fipe.
=============================================================
*/


//Interface para a requisição da marca do veículo via http get
export interface marca{
    nome: string,
    codigo: string
}

//Interface para a requisição dos marcos dos veículo via http get
export interface modelo{
    nome: string,
    codigo: number
}

export interface modelos{
    modelos: modelo[];
}

//Interface para a requisição da lista dos anos dos veículo via http get
export interface ano{
    nome: string,
    codigo: string
}

//Interface para a requisição preço corrente da Tabela FIPE via http get
export interface fipe{
    Valor: string,
    ValorNumerico: number,
    Marca: string,
    Modelo: string,
    AnoModelo: number,
    Combustivel: string,
    CodigoFipe: string,
    MesReferencia: string,
    TipoVeiculo: number,
    SiglaCombustivel: string
}

export interface result{
    state: number,
    result: number
}