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
import {DetalleFactura} from '../models';
import {DetalleFacturaRepository} from '../repositories';

export class DetalleFacturaControllerController {
  constructor(
    @repository(DetalleFacturaRepository)
    public detalleFacturaRepository : DetalleFacturaRepository,
  ) {}

  @post('/detalle-facturas', {
    responses: {
      '200': {
        description: 'DetalleFactura model instance',
        content: {'application/json': {schema: getModelSchemaRef(DetalleFactura)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetalleFactura, {
            title: 'NewDetalleFactura',
            
          }),
        },
      },
    })
    detalleFactura: DetalleFactura,
  ): Promise<DetalleFactura> {
    return this.detalleFacturaRepository.create(detalleFactura);
  }

  @get('/detalle-facturas/count', {
    responses: {
      '200': {
        description: 'DetalleFactura model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(DetalleFactura) where?: Where<DetalleFactura>,
  ): Promise<Count> {
    return this.detalleFacturaRepository.count(where);
  }

  @get('/detalle-facturas', {
    responses: {
      '200': {
        description: 'Array of DetalleFactura model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(DetalleFactura, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(DetalleFactura) filter?: Filter<DetalleFactura>,
  ): Promise<DetalleFactura[]> {
    return this.detalleFacturaRepository.find(filter);
  }

  @patch('/detalle-facturas', {
    responses: {
      '200': {
        description: 'DetalleFactura PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetalleFactura, {partial: true}),
        },
      },
    })
    detalleFactura: DetalleFactura,
    @param.where(DetalleFactura) where?: Where<DetalleFactura>,
  ): Promise<Count> {
    return this.detalleFacturaRepository.updateAll(detalleFactura, where);
  }

  @get('/detalle-facturas/{id}', {
    responses: {
      '200': {
        description: 'DetalleFactura model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(DetalleFactura, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(DetalleFactura, {exclude: 'where'}) filter?: FilterExcludingWhere<DetalleFactura>
  ): Promise<DetalleFactura> {
    return this.detalleFacturaRepository.findById(id, filter);
  }

  @patch('/detalle-facturas/{id}', {
    responses: {
      '204': {
        description: 'DetalleFactura PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetalleFactura, {partial: true}),
        },
      },
    })
    detalleFactura: DetalleFactura,
  ): Promise<void> {
    await this.detalleFacturaRepository.updateById(id, detalleFactura);
  }

  @put('/detalle-facturas/{id}', {
    responses: {
      '204': {
        description: 'DetalleFactura PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() detalleFactura: DetalleFactura,
  ): Promise<void> {
    await this.detalleFacturaRepository.replaceById(id, detalleFactura);
  }

  @del('/detalle-facturas/{id}', {
    responses: {
      '204': {
        description: 'DetalleFactura DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.detalleFacturaRepository.deleteById(id);
  }
}
