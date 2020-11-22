import {DefaultCrudRepository} from '@loopback/repository';
import {Sysdiagrams, SysdiagramsRelations} from '../models';
import {MaaissqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SysdiagramsRepository extends DefaultCrudRepository<
  Sysdiagrams,
  typeof Sysdiagrams.prototype.diagramId,
  SysdiagramsRelations
> {
  constructor(
    @inject('datasources.maaissql') dataSource: MaaissqlDataSource,
  ) {
    super(Sysdiagrams, dataSource);
  }
}
