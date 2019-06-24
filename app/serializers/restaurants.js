import { Serializer } from 'lux-framework';

class RestaurantsSerializer extends Serializer {
  attributes = [
    'name',
    'address'
  ];
}

export default RestaurantsSerializer;
