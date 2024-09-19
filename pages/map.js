import LocationsMap from '../components/LocationsMap';

export default function MapPage({ nonce }) {
  return (
    <div>
      <h1>Our Location</h1>
      <LocationsMap nonce={nonce} />
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const nonce = req.headers.get('x-nonce');

  return {
    props: {
      nonce,
    },
  };
}