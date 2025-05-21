import React from 'react';

const ProfileUI = () => {
  return (
    <div style={{ background: '#181818', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <div style={{ padding: '20px 0 10px 16px', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <button style={{
          background: 'none', border: 'none', color: '#fff', fontSize: 24, marginRight: 16, cursor: 'pointer'
        }}>{'←'}</button>
        <span style={{ fontSize: 22, fontWeight: 600 }}>Profile</span>
        <button style={{
          position: 'absolute', right: 16, top: 16, background: '#232323', border: 'none', borderRadius: 16,
          color: '#aaa', fontSize: 16, padding: '6px 16px', cursor: 'pointer'
        }}>support</button>
      </div>

      {/* Profile Section */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '24px 16px 8px 16px' }}>
        <img
          src="image1" // Replace with actual image path or URL
          alt="Profile"
          style={{ width: 80, height: 80, borderRadius: '50%', marginRight: 20, objectFit: 'cover', background: '#444' }}
        />
        <div>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#ddd' }}>andaz Kumar</div>
          <div style={{ marginTop: 4, color: '#bbb', fontSize: 16, fontWeight: 500 }}>member since Dec, 2020</div>
        </div>
        <button style={{
          marginLeft: 'auto', background: 'none', border: '1px solid #333', borderRadius: '50%', width: 40, height: 40, color: '#aaa', cursor: 'pointer'
        }}>
          <svg width="18" height="18" fill="#aaa"><circle cx="9" cy="9" r="8" stroke="#aaa" strokeWidth="1.5" fill="none"/><path d="M6 12l6-6M6 6l6 6" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </button>
      </div>

      {/* Vehicle Card */}
      <div style={{
        background: '#222', borderRadius: 12, margin: '16px', padding: '18px 16px', display: 'flex', alignItems: 'center'
      }}>
        <div style={{
          background: '#282828', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 16
        }}>
          <svg width="22" height="22" fill="#fff"><rect x="6" y="10" width="10" height="6" rx="2" fill="#fff"/><circle cx="8" cy="17" r="1" fill="#bbb"/><circle cx="14" cy="17" r="1" fill="#bbb"/></svg>
        </div>
        <div>
          <div style={{ color: '#aaa', fontSize: 14, marginBottom: 2 }}>get to know your vehicles, inside out</div>
          <div style={{ color: '#fff', fontWeight: 600, fontSize: 16 }}>CRED garage <span style={{ fontSize: 18, marginLeft: 8 }}>→</span></div>
        </div>
      </div>

      {/* Credit Info */}
      <div style={{ padding: '0 16px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid #232323'
        }}>
          <span>
            <span style={{ marginRight: 10, color: '#aaa' }}>credit score</span>
            <span style={{ color: '#36D47C', fontWeight: 600 }}>• REFRESH AVAILABLE</span>
          </span>
          <span style={{ fontWeight: 600, fontSize: 17 }}>757 <span style={{ color: '#999', marginLeft: 8 }}>→</span></span>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid #232323'
        }}>
          <span style={{ color: '#aaa' }}>₹ lifetime cashback</span>
          <span style={{ fontWeight: 600, fontSize: 17 }}>₹3 <span style={{ color: '#999', marginLeft: 8 }}>→</span></span>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0'
        }}>
          <span style={{ color: '#aaa' }}>bank balance</span>
          <span style={{ fontWeight: 600, fontSize: 17 }}>check <span style={{ color: '#999', marginLeft: 8 }}>→</span></span>
        </div>
      </div>

      {/* Rewards & Benefits */}
      <div style={{ marginTop: 28, padding: '0 16px' }}>
        <div style={{ color: '#888', letterSpacing: 2, fontWeight: 600, fontSize: 13, marginBottom: 16 }}>
          YOUR REWARDS & BENEFITS
        </div>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #232323'
        }}>
          <span style={{ color: '#fff' }}>cashback balance</span>
          <span style={{ color: '#fff', fontWeight: 500 }}>₹0</span>
        </div>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #232323'
        }}>
          <span style={{ color: '#fff' }}>coins</span>
          <span style={{ color: '#fff', fontWeight: 500 }}>26,46,583</span>
        </div>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0'
        }}>
          <span>
            <div style={{ color: '#fff' }}>win upto Rs 1000</div>
            <div style={{ color: '#bbb', fontSize: 13, marginTop: 2 }}>refer and earn</div>
          </span>
        </div>
      </div>

      {/* Transactions & Support */}
      <div style={{ marginTop: 36, padding: '0 16px 32px 16px' }}>
        <div style={{ color: '#888', letterSpacing: 2, fontWeight: 600, fontSize: 13, marginBottom: 18 }}>
          TRANSACTIONS & SUPPORT
        </div>
        <div style={{
          color: '#fff', fontWeight: 500, fontSize: 17, padding: '10px 0'
        }}>
          all transactions
        </div>
      </div>
    </div>
  );
};

export default ProfileUI;