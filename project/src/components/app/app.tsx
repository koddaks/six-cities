import { citiesCardsMock } from '../../mock/cards';
import Main from '../../pages/main/main';


function App(): JSX.Element {
  return <Main cards={citiesCardsMock}></Main>;
}

export default App;
