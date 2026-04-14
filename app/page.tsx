export default function Home() {
  return (
    <main style={{ padding: '40px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '48px', color: '#000', marginBottom: '20px' }}>
        Closed Claw
      </h1>
      <p style={{ fontSize: '18px', color: '#333' }}>
        Local AI Agents for Small Business - Your own AI team, running locally.
      </p>
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '24px', color: '#000', marginBottom: '10px' }}>
          Welcome to Closed Claw
        </h2>
        <p style={{ color: '#666' }}>
          Powerful AI automation on a Raspberry Pi. Buy once, use forever - no token costs after purchase.
        </p>
        <a 
          href="/login" 
          style={{ 
            display: 'inline-block', 
            marginTop: '20px', 
            padding: '12px 24px', 
            backgroundColor: '#6d28d9', 
            color: '#fff', 
            borderRadius: '6px', 
            textDecoration: 'none' 
          }}
        >
          Get Started
        </a>
      </div>
    </main>
  )
}
