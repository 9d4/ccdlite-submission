import Home from './components/Home/index.vue';
import ChallengeSingle from './components/Challenges/challenge-single.vue';

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'challenge',
    path: '/ch/:chalcode',
    component: ChallengeSingle,
  },
];

export default routes;
