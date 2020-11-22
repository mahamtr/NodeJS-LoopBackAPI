import {DefaultCrudRepository} from '@loopback/repository';
import {HistorialPagosDeCliente, HistorialPagosDeClienteRelations} from '../models';
import {MaaissqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HistorialPagosDeClienteRepository extends DefaultCrudRepository<
  HistorialPagosDeCliente,
  typeof HistorialPagosDeCliente.prototype.id,
  HistorialPagosDeClienteRelations
> {
  constructor(
    @inject('datasources.maaissql') dataSource: MaaissqlDataSource,
  ) {
    super(HistorialPagosDeCliente, dataSource);
  }
}
