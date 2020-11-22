import {DefaultCrudRepository} from '@loopback/repository';
import {Articulos, ArticulosRelations} from '../models';
import {MaaissqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ArticulosRepository extends DefaultCrudRepository<
  Articulos,
  typeof Articulos.prototype.id,
  ArticulosRelations
> {
  constructor(
    @inject('datasources.maaissql') dataSource: MaaissqlDataSource,
  ) {
    super(Articulos, dataSource);
  }
}
