export const config = { amp: 'hybrid' }

export default function Services() {
  return (
    <div>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Our Services</h2>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <li>Residential Fencing</li>
        <li>Commercial Fencing</li>
        <li>Fence Repair</li>
        <li>Custom Fence Design</li>
      </ul>
    </div>
  )
}