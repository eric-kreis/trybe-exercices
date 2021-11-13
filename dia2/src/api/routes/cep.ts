import { Router } from 'express';
import { CepController } from '../../controllers';
import { validateCepBody, validateCepParameter } from '../../middlewares';

const router = Router();

router.get('/cep', CepController.findAll);
router.get('/cep/:cep', validateCepParameter, CepController.findByCep);
router.post('/cep', validateCepBody, CepController.create);

export default router;
