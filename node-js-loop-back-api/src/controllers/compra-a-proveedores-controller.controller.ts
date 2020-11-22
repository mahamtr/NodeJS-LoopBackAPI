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
import {CompraAProveedores} from '../models';
import {CompraAProveedoresRepository} from '../repositories';

export class CompraAProveedoresControllerController {
  constructor(
    @repository(CompraAProveedoresRepository)
    public compraAProveedoresRepository : CompraAProveedoresRepository,
  ) {}

  @post('/compra-a-proveedores', {
    responses: {
      '200': {
        description: 'CompraAProveedores model instance',
        content: {'application/json': {schema: getModelSchemaRef(CompraAProveedores)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CompraAProveedores, {
            title: 'NewCompraAProveedores',
            
          }),
        },
      },
    })
    compraAProveedores: CompraAProveedores,
  ): Promise<CompraAProveedores> {
    return this.compraAProveedoresRepository.create(compraAProveedores);
  }

  @get('/compra-a-proveedores/count', {
    responses: {
      '200': {
        description: 'CompraAProveedores model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(CompraAProveedores) where?: Where<CompraAProveedores>,
  ): Promise<Count> {
    return this.compraAProveedoresRepository.count(where);
  }

  @get('/compra-a-proveedores', {
    responses: {
      '200': {
        description: 'Array of CompraAProveedores model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(CompraAProveedores, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(CompraAProveedores) filter?: Filter<CompraAProveedores>,
  ): Promise<CompraAProveedores[]> {
    return this.compraAProveedoresRepository.find(filter);
  }

  @patch('/compra-a-proveedores', {
    responses: {
      '200': {
        description: 'CompraAProveedores PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CompraAProveedores, {partial: true}),
        },
      },
    })
    compraAProveedores: CompraAProveedores,
    @param.where(CompraAProveedores) where?: Where<CompraAProveedores>,
  ): Promise<Count> {
    return this.compraAProveedoresRepository.updateAll(compraAProveedores, where);
  }

  @get('/compra-a-proveedores/{id}', {
    responses: {
      '200': {
        description: 'CompraAProveedores model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(CompraAProveedores, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CompraAProveedores, {exclude: 'where'}) filter?: FilterExcludingWhere<CompraAProveedores>
  ): Promise<CompraAProveedores> {
    return this.compraAProveedoresRepository.findById(id, filter);
  }

  @patch('/compra-a-proveedores/{id}', {
    responses: {
      '204': {
        description: 'CompraAProveedores PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CompraAProveedores, {partial: true}),
        },
      },
    })
    compraAProveedores: CompraAProveedores,
  ): Promise<void> {
    await this.compraAProveedoresRepository.updateById(id, compraAProveedores);
  }

  @put('/compra-a-proveedores/{id}', {
    responses: {
      '204': {
        description: 'CompraAProveedores PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() compraAProveedores: CompraAProveedores,
  ): Promise<void> {
    await this.compraAProveedoresRepository.replaceById(id, compraAProveedores);
  }

  @del('/compra-a-proveedores/{id}', {
    responses: {
      '204': {
        description: 'CompraAProveedores DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.compraAProveedoresRepository.deleteById(id);
  }
}
