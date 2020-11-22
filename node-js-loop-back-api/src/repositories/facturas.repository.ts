import {DefaultCrudRepository} from '@loopback/repository';
import {Facturas, FacturasRelations} from '../models';
import {MaaissqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FacturasRepository extends DefaultCrudRepository<
  Facturas,
  typeof Facturas.prototype.id,
  FacturasRelations
> {
  constructor(
    @inject('datasources.maaissql') dataSource: MaaissqlDataSource,
  ) {
    super(Facturas, dataSource);
  }
}
