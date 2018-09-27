import { Card } from 'components';
import { Properties } from './Properties';

const AnimeCard = ({ title, image, data }) => {
  return (
    <div>
      <Card header={title} contentImage={image}>
        <Properties data={data} />
      </Card>
    </div>
  );
};

export { AnimeCard };
