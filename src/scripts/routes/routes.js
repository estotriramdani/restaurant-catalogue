import AllRestaurant from '../views/pages/all-restaurant';
import Detail from '../views/pages/detail';

const routes = {
  '/': AllRestaurant, // default page
  '/detail/:id': Detail,
};

export default routes;
