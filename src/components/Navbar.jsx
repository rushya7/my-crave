import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null)
  const navigate = useNavigate()

  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    padding: '10px 20px',
    color: '#fff',
  }

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  }

  const menuWrapperStyle = {
    display: 'flex',
    gap: '30px',
    alignItems: 'center',
  }

  const menuStyle = {
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  }

  const dropdownStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: 1,
    minWidth: '180px',
  }

  const dropdownItemStyle = {
    padding: '10px',
    borderBottom: '1px solid #ccc',
    cursor: 'pointer',
  }

  const arrowStyle = {
    transition: 'transform 0.2s ease',
    fontSize: '12px',
  }

  const menus = {
    Admin: [{ name: 'User Creation', path: '/admin/user-creation' }],
    'Lead Generation': [
      { name: 'Registration', path: '/lead/registration' },
      { name: 'NDA', path: '/lead/nda' },
      { name: 'Lead Follow', path: '/lead/follow' },
      { name: 'Payment', path: '/lead/payment' },
    ],
    'IPR Registration': [],
    'Learning Material': [],
  }

  return (
    <div style={navbarStyle}>
      <div style={logoStyle}>my crave</div>

      <div style={menuWrapperStyle}>
        {Object.entries(menus).map(([menuName, items]) => (
          <div
            key={menuName}
            style={menuStyle}
            onMouseEnter={() => setOpenMenu(menuName)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <span>{menuName}</span>
            {items.length > 0 && (
              <span style={{ ...arrowStyle, transform: openMenu === menuName ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                ▼
              </span>
            )}

            {openMenu === menuName && items.length > 0 && (
              <div style={dropdownStyle}>
                {items.map((item) => (
                  <div
                    key={item.name}
                    style={dropdownItemStyle}
                    onClick={() => navigate(item.path)}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Navbar
