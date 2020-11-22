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
import {HistorialPagosDeCliente} from '../models';
import {HistorialPagosDeClienteRepository} from '../repositories';

export class HistorialPagosDeClienteControllerController {
  constructor(
    @repository(HistorialPagosDeClienteRepository)
    public historialPagosDeClienteRepository : HistorialPagosDeClienteRepository,
  ) {}

  @post('/historial-pagos-de-clientes', {
    responses: {
      '200': {
        description: 'HistorialPagosDeCliente model instance',
        content: {'application/json': {schema: getModelSchemaRef(HistorialPagosDeCliente)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HistorialPagosDeCliente, {
            title: 'NewHistorialPagosDeCliente',
            
          }),
        },
      },
    })
    historialPagosDeCliente: HistorialPagosDeCliente,
  ): Promise<HistorialPagosDeCliente> {
    return this.historialPagosDeClienteRepository.create(historialPagosDeCliente);
  }

  @get('/historial-pagos-de-clientes/count', {
    responses: {
      '200': {
        description: 'HistorialPagosDeCliente model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(HistorialPagosDeCliente) where?: Where<HistorialPagosDeCliente>,
  ): Promise<Count> {
    return this.historialPagosDeClienteRepository.count(where);
  }

  @get('/historial-pagos-de-clientes', {
    responses: {
      '200': {
        description: 'Array of HistorialPagosDeCliente model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(HistorialPagosDeCliente, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(HistorialPagosDeCliente) filter?: Filter<HistorialPagosDeCliente>,
  ): Promise<HistorialPagosDeCliente[]> {
    return this.historialPagosDeClienteRepository.find(filter);
  }

  @patch('/historial-pagos-de-clientes', {
    responses: {
      '200': {
        description: 'HistorialPagosDeCliente PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HistorialPagosDeCliente, {partial: true}),
        },
      },
    })
    historialPagosDeCliente: HistorialPagosDeCliente,
    @param.where(HistorialPagosDeCliente) where?: Where<HistorialPagosDeCliente>,
  ): Promise<Count> {
    return this.historialPagosDeClienteRepository.updateAll(historialPagosDeCliente, where);
  }

  @get('/historial-pagos-de-clientes/{id}', {
    responses: {
      '200': {
        description: 'HistorialPagosDeCliente model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(HistorialPagosDeCliente, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(HistorialPagosDeCliente, {exclude: 'where'}) filter?: FilterExcludingWhere<HistorialPagosDeCliente>
  ): Promise<HistorialPagosDeCliente> {
    return this.historialPagosDeClienteRepository.findById(id, filter);
  }

  @patch('/historial-pagos-de-clientes/{id}', {
    responses: {
      '204': {
        description: 'HistorialPagosDeCliente PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HistorialPagosDeCliente, {partial: true}),
        },
      },
    })
    historialPagosDeCliente: HistorialPagosDeCliente,
  ): Promise<void> {
    await this.historialPagosDeClienteRepository.updateById(id, historialPagosDeCliente);
  }

  @put('/historial-pagos-de-clientes/{id}', {
    responses: {
      '204': {
        description: 'HistorialPagosDeCliente PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() historialPagosDeCliente: HistorialPagosDeCliente,
  ): Promise<void> {
    await this.historialPagosDeClienteRepository.replaceById(id, historialPagosDeCliente);
  }

  @del('/historial-pagos-de-clientes/{id}', {
    responses: {
      '204': {
        description: 'HistorialPagosDeCliente DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.historialPagosDeClienteRepository.deleteById(id);
  }
}
