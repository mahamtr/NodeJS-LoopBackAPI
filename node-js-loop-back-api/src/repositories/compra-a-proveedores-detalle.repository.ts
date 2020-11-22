import {DefaultCrudRepository} from '@loopback/repository';
import {CompraAProveedoresDetalle, CompraAProveedoresDetalleRelations} from '../models';
import {MaaissqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CompraAProveedoresDetalleRepository extends DefaultCrudRepository<
  CompraAProveedoresDetalle,
  typeof CompraAProveedoresDetalle.prototype.id,
  CompraAProveedoresDetalleRelations
> {
  constructor(
    @inject('datasources.maaissql') dataSource: MaaissqlDataSource,
  ) {
    super(CompraAProveedoresDetalle, dataSource);
  }
}
