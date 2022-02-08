import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Allrecipes from './pages/Allrecipes';
import FavRecipes from './pages/FavRecipes';
import NewRecipes from './pages/NewRecipes';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Allrecipes />
        </Route>
        <Route path='/favorite-recipes' exact>
          <FavRecipes />
        </Route>
        <Route path='/new-recipes' exact>
          <NewRecipes />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
