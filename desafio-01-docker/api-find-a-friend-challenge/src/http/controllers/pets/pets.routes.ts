import { FastifyInstance } from 'fastify'
import { verifyJwt } from '@/http/middlewares/verify-jwt'

import { createPetController } from '@/http/controllers/pets/create-pet.controller'
import { getPetController } from './get-pet.controller'
import { searchPetsController } from './search-pets.controller'

export async function petsRoutes(app: FastifyInstance) {
  app.post('/orgs/pets', { onRequest: [verifyJwt] }, createPetController)
  app.get('/orgs/pets/:id', getPetController)
  app.get('/orgs/pets', searchPetsController)
}
