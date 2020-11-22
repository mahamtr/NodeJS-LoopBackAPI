import {DefaultCrudRepository} from '@loopback/repository';
import {CompraAProveedores, CompraAProveedoresRelations} from '../models';
import {MaaissqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CompraAProveedoresRepository extends DefaultCrudRepository<
  CompraAProveedores,
  typeof CompraAProveedores.prototype.id,
  CompraAProveedoresRelations
> {
  constructor(
    @inject('datasources.maaissql') dataSource: MaaissqlDataSource,
  ) {
    super(CompraAProveedores, dataSource);
  }
}
