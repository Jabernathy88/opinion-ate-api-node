import { Controller } from 'lux-framework';

class RestaurantsController extends Controller {
  params = [
    'name',
    'address'
  ];
}

export default RestaurantsController;
