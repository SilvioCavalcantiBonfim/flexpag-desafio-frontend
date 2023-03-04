import { Component } from '@angular/core';
import { ControllerService } from 'src/app/controller/controller.service';
import { fipe } from 'src/app/controller/interfaces/parallelum.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  constructor(public controller: ControllerService) { }

  get msg(): string {
    switch (this.controller.currentState().state) {
      case 0:
        return 'Valor do veículo abaixo da tabela FIPE';
      case 1:
        return 'Valor do veículo na media da tabela FIPE';
      case 2:
        return 'Valor do veículo acima da tabela FIPE';
      default:
        return '';
    }
  }

  get alert(): string {
    switch (this.controller.currentState().state) {
      case 0:
        return 'Valor abaixo do mercado';
      case 1:
        return 'Valor de mercado';
      case 2:
        return 'Valor acima do mercado';
      default:
        return '';
    }
  }

  get color(): string {
    switch (this.controller.currentState().state) {
      case 0:
        return 'success';
      case 1:
        return 'warning';
      case 2:
        return 'danger';
      default:
        return '';
    }
  }

  get fipeValue(): fipe {
    if (this.controller.fipe !== undefined)
      return this.controller.fipe;
    else{
      const dt = new Date();
      return {
          Valor: 'R$ 0,00',
          ValorNumerico: 0,
          Marca: '-',
          Modelo: '-',
          AnoModelo: dt.getFullYear(),
          Combustivel: '-',
          CodigoFipe: '-',
          MesReferencia: `janeiro de ${dt.getFullYear()} `,
          TipoVeiculo: 0,
          SiglaCombustivel: '-'
        }
    }
  }
}
