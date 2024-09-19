export const config = { amp: 'hybrid' }

export default function Gallery() {
  return (
    <div>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Our Work</h2>
      <amp-carousel width="400" height="300" layout="responsive" type="slides">
        <amp-img src="/fence1.jpg" width="400" height="300" layout="responsive" alt="Fence 1"></amp-img>
        <amp-img src="/fence2.jpg" width="400" height="300" layout="responsive" alt="Fence 2"></amp-img>
        <amp-img src="/fence3.jpg" width="400" height="300" layout="responsive" alt="Fence 3"></amp-img>
      </amp-carousel>
    </div>
  )
}


export async function getStaticProps({ params }) {
  return {
    props: {
      heroImage: "https://imagedelivery.net/OHVtjf602XdHccCnziCADA/564989bf-964c-45c3-2ec6-deeeb9dd2800/public", // Replace with actual hero image URL
      showHero: true // or false, depending on whether you want to show the hero on fencing pages
    }
  }
}