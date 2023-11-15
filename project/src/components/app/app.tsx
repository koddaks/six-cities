import Main from '../../pages/main/main';
import { CitiesCardProps } from '../cities-card/cities-card';

export type AppProps = {
  cards: CitiesCardProps[];
};

function App({ cards }: AppProps): JSX.Element {
  return <Main cards={cards}></Main>;
}

export default App;
