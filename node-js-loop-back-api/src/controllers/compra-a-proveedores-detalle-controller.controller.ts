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
import {CompraAProveedoresDetalle} from '../models';
import {CompraAProveedoresDetalleRepository} from '../repositories';

export class CompraAProveedoresDetalleControllerController {
  constructor(
    @repository(CompraAProveedoresDetalleRepository)
    public compraAProveedoresDetalleRepository : CompraAProveedoresDetalleRepository,
  ) {}

  @post('/compra-a-proveedores-detalles', {
    responses: {
      '200': {
        description: 'CompraAProveedoresDetalle model instance',
        content: {'application/json': {schema: getModelSchemaRef(CompraAProveedoresDetalle)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CompraAProveedoresDetalle, {
            title: 'NewCompraAProveedoresDetalle',
            
          }),
        },
      },
    })
    compraAProveedoresDetalle: CompraAProveedoresDetalle,
  ): Promise<CompraAProveedoresDetalle> {
    return this.compraAProveedoresDetalleRepository.create(compraAProveedoresDetalle);
  }

  @get('/compra-a-proveedores-detalles/count', {
    responses: {
      '200': {
        description: 'CompraAProveedoresDetalle model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(CompraAProveedoresDetalle) where?: Where<CompraAProveedoresDetalle>,
  ): Promise<Count> {
    return this.compraAProveedoresDetalleRepository.count(where);
  }

  @get('/compra-a-proveedores-detalles', {
    responses: {
      '200': {
        description: 'Array of CompraAProveedoresDetalle model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(CompraAProveedoresDetalle, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(CompraAProveedoresDetalle) filter?: Filter<CompraAProveedoresDetalle>,
  ): Promise<CompraAProveedoresDetalle[]> {
    return this.compraAProveedoresDetalleRepository.find(filter);
  }

  @patch('/compra-a-proveedores-detalles', {
    responses: {
      '200': {
        description: 'CompraAProveedoresDetalle PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CompraAProveedoresDetalle, {partial: true}),
        },
      },
    })
    compraAProveedoresDetalle: CompraAProveedoresDetalle,
    @param.where(CompraAProveedoresDetalle) where?: Where<CompraAProveedoresDetalle>,
  ): Promise<Count> {
    return this.compraAProveedoresDetalleRepository.updateAll(compraAProveedoresDetalle, where);
  }

  @get('/compra-a-proveedores-detalles/{id}', {
    responses: {
      '200': {
        description: 'CompraAProveedoresDetalle model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(CompraAProveedoresDetalle, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CompraAProveedoresDetalle, {exclude: 'where'}) filter?: FilterExcludingWhere<CompraAProveedoresDetalle>
  ): Promise<CompraAProveedoresDetalle> {
    return this.compraAProveedoresDetalleRepository.findById(id, filter);
  }

  @patch('/compra-a-proveedores-detalles/{id}', {
    responses: {
      '204': {
        description: 'CompraAProveedoresDetalle PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CompraAProveedoresDetalle, {partial: true}),
        },
      },
    })
    compraAProveedoresDetalle: CompraAProveedoresDetalle,
  ): Promise<void> {
    await this.compraAProveedoresDetalleRepository.updateById(id, compraAProveedoresDetalle);
  }

  @put('/compra-a-proveedores-detalles/{id}', {
    responses: {
      '204': {
        description: 'CompraAProveedoresDetalle PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() compraAProveedoresDetalle: CompraAProveedoresDetalle,
  ): Promise<void> {
    await this.compraAProveedoresDetalleRepository.replaceById(id, compraAProveedoresDetalle);
  }

  @del('/compra-a-proveedores-detalles/{id}', {
    responses: {
      '204': {
        description: 'CompraAProveedoresDetalle DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.compraAProveedoresDetalleRepository.deleteById(id);
  }
}
