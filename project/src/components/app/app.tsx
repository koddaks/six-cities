import Main from '../../pages/main/main';
import { citiesCardData } from '../cities-card-list/cities-card-list';

function App(): JSX.Element {
  return <Main placesCount={citiesCardData.length}></Main>;
}

export default App;
