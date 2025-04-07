import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 1.5rem;
  text-align: center;
  margin-top: auto;
  border-top: 1px solid #e9ecef;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Copyright = styled.p`
  color: #6c757d;
  font-size: 0.9rem;
`;

const Disclaimer = styled.p`
  color: #6c757d;
  font-size: 0.8rem;
  font-style: italic;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>
          &copy; {currentYear} Excuse Calendar. All rights reserved.
        </Copyright>
        <Disclaimer>
          Disclaimer: Use these excuses at your own risk. We are not responsible for any awkward situations, 
          raised eyebrows, or sudden promotions that may result from their use.
        </Disclaimer>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;