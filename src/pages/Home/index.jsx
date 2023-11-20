import data from '../../data/data.json'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      Hello World !
      <Link to='/logement'>Logements</Link>
    </div>
  );
}

export default Home;
