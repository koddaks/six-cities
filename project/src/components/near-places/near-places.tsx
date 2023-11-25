import { Offer } from '../../types';
import PlaceCard from '../cities-card/place-card';

type NearPlacesProps = {
  propertiesInNeighbourhood?: Offer[] | undefined;
};

function NearPlaces({ propertiesInNeighbourhood }: NearPlacesProps) {
  // console.log(propertiesInNeighbourhood);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {propertiesInNeighbourhood && propertiesInNeighbourhood.map((offer) => (
          <PlaceCard key={property.id} offer={offer} />;
        ))}
      </div>
    </section>
  );
}

export default NearPlaces;
