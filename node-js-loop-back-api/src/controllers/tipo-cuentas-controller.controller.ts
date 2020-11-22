import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {TipoCuentas} from '../models';
import {TipoCuentasRepository} from '../repositories';

export class TipoCuentasControllerController {
  constructor(
    @repository(TipoCuentasRepository)
    public tipoCuentasRepository : TipoCuentasRepository,
  ) {}

  @post('/tipo-cuentas', {
    responses: {
      '200': {
        description: 'TipoCuentas model instance',
        content: {'application/json': {schema: getModelSchemaRef(TipoCuentas)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoCuentas, {
            title: 'NewTipoCuentas',
            exclude: ['id'],
          }),
        },
      },
    })
    tipoCuentas: Omit<TipoCuentas, 'id'>,
  ): Promise<TipoCuentas> {
    return this.tipoCuentasRepository.create(tipoCuentas);
  }

  @get('/tipo-cuentas/count', {
    responses: {
      '200': {
        description: 'TipoCuentas model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(TipoCuentas) where?: Where<TipoCuentas>,
  ): Promise<Count> {
    return this.tipoCuentasRepository.count(where);
  }

  @get('/tipo-cuentas', {
    responses: {
      '200': {
        description: 'Array of TipoCuentas model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(TipoCuentas, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(TipoCuentas) filter?: Filter<TipoCuentas>,
  ): Promise<TipoCuentas[]> {
    return this.tipoCuentasRepository.find(filter);
  }

  @patch('/tipo-cuentas', {
    responses: {
      '200': {
        description: 'TipoCuentas PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoCuentas, {partial: true}),
        },
      },
    })
    tipoCuentas: TipoCuentas,
    @param.where(TipoCuentas) where?: Where<TipoCuentas>,
  ): Promise<Count> {
    return this.tipoCuentasRepository.updateAll(tipoCuentas, where);
  }

  @get('/tipo-cuentas/{id}', {
    responses: {
      '200': {
        description: 'TipoCuentas model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(TipoCuentas, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TipoCuentas, {exclude: 'where'}) filter?: FilterExcludingWhere<TipoCuentas>
  ): Promise<TipoCuentas> {
    return this.tipoCuentasRepository.findById(id, filter);
  }

  @patch('/tipo-cuentas/{id}', {
    responses: {
      '204': {
        description: 'TipoCuentas PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoCuentas, {partial: true}),
        },
      },
    })
    tipoCuentas: TipoCuentas,
  ): Promise<void> {
    await this.tipoCuentasRepository.updateById(id, tipoCuentas);
  }

  @put('/tipo-cuentas/{id}', {
    responses: {
      '204': {
        description: 'TipoCuentas PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tipoCuentas: TipoCuentas,
  ): Promise<void> {
    await this.tipoCuentasRepository.replaceById(id, tipoCuentas);
  }

  @del('/tipo-cuentas/{id}', {
    responses: {
      '204': {
        description: 'TipoCuentas DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tipoCuentasRepository.deleteById(id);
  }
}
