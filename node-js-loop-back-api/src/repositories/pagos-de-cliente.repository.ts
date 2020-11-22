import {DefaultCrudRepository} from '@loopback/repository';
import {PagosDeCliente, PagosDeClienteRelations} from '../models';
import {MaaissqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PagosDeClienteRepository extends DefaultCrudRepository<
  PagosDeCliente,
  typeof PagosDeCliente.prototype.id,
  PagosDeClienteRelations
> {
  constructor(
    @inject('datasources.maaissql') dataSource: MaaissqlDataSource,
  ) {
    super(PagosDeCliente, dataSource);
  }
}
