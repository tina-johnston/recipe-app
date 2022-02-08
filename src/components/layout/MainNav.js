import { Link } from 'react-router-dom';
import styles from './MainNav.module.css';

const MainNav = () => {
  return (
    <header className={styles.header}>
      <h2>Recipe Album</h2>
      <nav>
        <ul>
          <li>
            <Link to='/'>recipes</Link>
          </li>
          <li>
            <Link to='/favorite-recipes'>favourite recipes</Link>
          </li>
          <li>
            <Link to='/new-recipes'>add a recipe</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
