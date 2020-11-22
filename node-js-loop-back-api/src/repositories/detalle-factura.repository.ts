import {DefaultCrudRepository} from '@loopback/repository';
import {DetalleFactura, DetalleFacturaRelations} from '../models';
import {MaaissqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DetalleFacturaRepository extends DefaultCrudRepository<
  DetalleFactura,
  typeof DetalleFactura.prototype.id,
  DetalleFacturaRelations
> {
  constructor(
    @inject('datasources.maaissql') dataSource: MaaissqlDataSource,
  ) {
    super(DetalleFactura, dataSource);
  }
}
