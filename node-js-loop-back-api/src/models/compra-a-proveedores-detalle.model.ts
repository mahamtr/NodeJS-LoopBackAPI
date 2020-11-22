import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'CompraAProveedoresDetalle'}}
})
export class CompraAProveedoresDetalle extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'IdCompra', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  idCompra: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'IdArticulo', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  idArticulo: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'Cantidad', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  cantidad: number;

  @property({
    type: 'number',
    required: true,
    precision: 18,
    scale: 2,
    mssql: {columnName: 'Monto', dataType: 'decimal', dataLength: null, dataPrecision: 18, dataScale: 2, nullable: 'NO'},
  })
  monto: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CompraAProveedoresDetalle>) {
    super(data);
  }
}

export interface CompraAProveedoresDetalleRelations {
  // describe navigational properties here
}

export type CompraAProveedoresDetalleWithRelations = CompraAProveedoresDetalle & CompraAProveedoresDetalleRelations;
