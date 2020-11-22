import {DefaultCrudRepository} from '@loopback/repository';
import {TipoCuentas, TipoCuentasRelations} from '../models';
import {MaaissqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TipoCuentasRepository extends DefaultCrudRepository<
  TipoCuentas,
  typeof TipoCuentas.prototype.id,
  TipoCuentasRelations
> {
  constructor(
    @inject('datasources.maaissql') dataSource: MaaissqlDataSource,
  ) {
    super(TipoCuentas, dataSource);
  }
}
