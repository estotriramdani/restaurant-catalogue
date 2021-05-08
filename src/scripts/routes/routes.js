import AllRestaurant from '../views/pages/all-restaurant';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': AllRestaurant, // default page
  '/detail/:id': Detail,
  '/favorite': Like,
};

export default routes;
