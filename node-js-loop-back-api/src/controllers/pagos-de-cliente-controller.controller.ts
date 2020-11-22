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
import {PagosDeCliente} from '../models';
import {PagosDeClienteRepository} from '../repositories';

export class PagosDeClienteControllerController {
  constructor(
    @repository(PagosDeClienteRepository)
    public pagosDeClienteRepository : PagosDeClienteRepository,
  ) {}

  @post('/pagos-de-clientes', {
    responses: {
      '200': {
        description: 'PagosDeCliente model instance',
        content: {'application/json': {schema: getModelSchemaRef(PagosDeCliente)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PagosDeCliente, {
            title: 'NewPagosDeCliente',
            
          }),
        },
      },
    })
    pagosDeCliente: PagosDeCliente,
  ): Promise<PagosDeCliente> {
    return this.pagosDeClienteRepository.create(pagosDeCliente);
  }

  @get('/pagos-de-clientes/count', {
    responses: {
      '200': {
        description: 'PagosDeCliente model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(PagosDeCliente) where?: Where<PagosDeCliente>,
  ): Promise<Count> {
    return this.pagosDeClienteRepository.count(where);
  }

  @get('/pagos-de-clientes', {
    responses: {
      '200': {
        description: 'Array of PagosDeCliente model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(PagosDeCliente, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(PagosDeCliente) filter?: Filter<PagosDeCliente>,
  ): Promise<PagosDeCliente[]> {
    return this.pagosDeClienteRepository.find(filter);
  }

  @patch('/pagos-de-clientes', {
    responses: {
      '200': {
        description: 'PagosDeCliente PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PagosDeCliente, {partial: true}),
        },
      },
    })
    pagosDeCliente: PagosDeCliente,
    @param.where(PagosDeCliente) where?: Where<PagosDeCliente>,
  ): Promise<Count> {
    return this.pagosDeClienteRepository.updateAll(pagosDeCliente, where);
  }

  @get('/pagos-de-clientes/{id}', {
    responses: {
      '200': {
        description: 'PagosDeCliente model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(PagosDeCliente, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PagosDeCliente, {exclude: 'where'}) filter?: FilterExcludingWhere<PagosDeCliente>
  ): Promise<PagosDeCliente> {
    return this.pagosDeClienteRepository.findById(id, filter);
  }

  @patch('/pagos-de-clientes/{id}', {
    responses: {
      '204': {
        description: 'PagosDeCliente PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PagosDeCliente, {partial: true}),
        },
      },
    })
    pagosDeCliente: PagosDeCliente,
  ): Promise<void> {
    await this.pagosDeClienteRepository.updateById(id, pagosDeCliente);
  }

  @put('/pagos-de-clientes/{id}', {
    responses: {
      '204': {
        description: 'PagosDeCliente PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() pagosDeCliente: PagosDeCliente,
  ): Promise<void> {
    await this.pagosDeClienteRepository.replaceById(id, pagosDeCliente);
  }

  @del('/pagos-de-clientes/{id}', {
    responses: {
      '204': {
        description: 'PagosDeCliente DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pagosDeClienteRepository.deleteById(id);
  }
}
