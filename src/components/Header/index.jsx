import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #6e48aa 0%, #9d50bb 100%);
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  
  a {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1000;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  max-width: 300px;
  height: 100%;
  background: linear-gradient(135deg, #6e48aa 0%, #9d50bb 100%);
  z-index: 101;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 4rem;
`;

const MobileNavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  padding: 0.5rem 0;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  position: relative;
  padding: 0.5rem 0;
  
  &:after {
    content: '';
    position: absolute;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <Link to="/">
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              🗓️ Excuse Calendar
            </motion.span>
          </Link>
        </Logo>
        <NavLinks>
          <NavLink to="/" active={location.pathname === '/' ? 1 : 0}>
            Generate
          </NavLink>
          <NavLink to="/saved" active={location.pathname === '/saved' ? 1 : 0}>
            Saved Excuses
          </NavLink>
          <NavLink to="/roadmap" active={location.pathname === '/roadmap' ? 1 : 0}>
            Roadmap
          </NavLink>
        </NavLinks>
        <MobileMenuButton onClick={toggleMobileMenu}>
          {mobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </Nav>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenuOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobileMenu}
          >
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <MobileNavLinks>
                <MobileNavLink
                  to="/"
                  active={location.pathname === '/' ? 1 : 0}
                  onClick={closeMobileMenu}
                >
                  Generate
                </MobileNavLink>
                <MobileNavLink
                  to="/saved"
                  active={location.pathname === '/saved' ? 1 : 0}
                  onClick={closeMobileMenu}
                >
                  Saved Excuses
                </MobileNavLink>
                <MobileNavLink
                  to="/roadmap"
                  active={location.pathname === '/roadmap' ? 1 : 0}
                  onClick={closeMobileMenu}
                >
                  Roadmap
                </MobileNavLink>
              </MobileNavLinks>
            </MobileMenu>
          </MobileMenuOverlay>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;