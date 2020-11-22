import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'HistorialPagosDeCliente'}}
})
export class HistorialPagosDeCliente extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'IdPago', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  idPago: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'IdCliente', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  idCliente: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<HistorialPagosDeCliente>) {
    super(data);
  }
}

export interface HistorialPagosDeClienteRelations {
  // describe navigational properties here
}

export type HistorialPagosDeClienteWithRelations = HistorialPagosDeCliente & HistorialPagosDeClienteRelations;
