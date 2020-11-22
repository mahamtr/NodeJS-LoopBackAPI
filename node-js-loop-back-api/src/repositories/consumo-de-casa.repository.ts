import {DefaultCrudRepository} from '@loopback/repository';
import {ConsumoDeCasa, ConsumoDeCasaRelations} from '../models';
import {MaaissqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ConsumoDeCasaRepository extends DefaultCrudRepository<
  ConsumoDeCasa,
  typeof ConsumoDeCasa.prototype.id,
  ConsumoDeCasaRelations
> {
  constructor(
    @inject('datasources.maaissql') dataSource: MaaissqlDataSource,
  ) {
    super(ConsumoDeCasa, dataSource);
  }
}
