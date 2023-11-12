import Detail from '../views/pages/detail';
import AllResto from '../views/pages/main';
import Like from '../views/pages/like';

const routes = {
  '/': AllResto,
  '/home': AllResto,
  '/detail/:id': Detail,
  '/liked': Like,
};

export default routes;
