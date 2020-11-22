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
import {ConsumoDeCasa} from '../models';
import {ConsumoDeCasaRepository} from '../repositories';

export class ConsumoDeCasaControllerController {
  constructor(
    @repository(ConsumoDeCasaRepository)
    public consumoDeCasaRepository : ConsumoDeCasaRepository,
  ) {}

  @post('/consumo-de-casas', {
    responses: {
      '200': {
        description: 'ConsumoDeCasa model instance',
        content: {'application/json': {schema: getModelSchemaRef(ConsumoDeCasa)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ConsumoDeCasa, {
            title: 'NewConsumoDeCasa',
            
          }),
        },
      },
    })
    consumoDeCasa: ConsumoDeCasa,
  ): Promise<ConsumoDeCasa> {
    return this.consumoDeCasaRepository.create(consumoDeCasa);
  }

  @get('/consumo-de-casas/count', {
    responses: {
      '200': {
        description: 'ConsumoDeCasa model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ConsumoDeCasa) where?: Where<ConsumoDeCasa>,
  ): Promise<Count> {
    return this.consumoDeCasaRepository.count(where);
  }

  @get('/consumo-de-casas', {
    responses: {
      '200': {
        description: 'Array of ConsumoDeCasa model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ConsumoDeCasa, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ConsumoDeCasa) filter?: Filter<ConsumoDeCasa>,
  ): Promise<ConsumoDeCasa[]> {
    return this.consumoDeCasaRepository.find(filter);
  }

  @patch('/consumo-de-casas', {
    responses: {
      '200': {
        description: 'ConsumoDeCasa PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ConsumoDeCasa, {partial: true}),
        },
      },
    })
    consumoDeCasa: ConsumoDeCasa,
    @param.where(ConsumoDeCasa) where?: Where<ConsumoDeCasa>,
  ): Promise<Count> {
    return this.consumoDeCasaRepository.updateAll(consumoDeCasa, where);
  }

  @get('/consumo-de-casas/{id}', {
    responses: {
      '200': {
        description: 'ConsumoDeCasa model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ConsumoDeCasa, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ConsumoDeCasa, {exclude: 'where'}) filter?: FilterExcludingWhere<ConsumoDeCasa>
  ): Promise<ConsumoDeCasa> {
    return this.consumoDeCasaRepository.findById(id, filter);
  }

  @patch('/consumo-de-casas/{id}', {
    responses: {
      '204': {
        description: 'ConsumoDeCasa PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ConsumoDeCasa, {partial: true}),
        },
      },
    })
    consumoDeCasa: ConsumoDeCasa,
  ): Promise<void> {
    await this.consumoDeCasaRepository.updateById(id, consumoDeCasa);
  }

  @put('/consumo-de-casas/{id}', {
    responses: {
      '204': {
        description: 'ConsumoDeCasa PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() consumoDeCasa: ConsumoDeCasa,
  ): Promise<void> {
    await this.consumoDeCasaRepository.replaceById(id, consumoDeCasa);
  }

  @del('/consumo-de-casas/{id}', {
    responses: {
      '204': {
        description: 'ConsumoDeCasa DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.consumoDeCasaRepository.deleteById(id);
  }
}
