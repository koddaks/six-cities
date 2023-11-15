import Main from '../../pages/main/main';
import { PlaceCardProps } from '../cities-card/place-card';

export type AppProps = {
  cards: PlaceCardProps[];
};

function App({ cards }: AppProps): JSX.Element {
  return <Main cards={cards}></Main>;
}

export default App;
