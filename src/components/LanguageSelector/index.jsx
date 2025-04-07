import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const SelectorContainer = styled.div`
  position: relative;
  margin-left: 1rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const LanguageButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.5rem;
  border-radius: 4px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const LanguageIcon = styled.span`
  font-size: 1.2rem;
`;

const DropdownMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 100;
  min-width: 120px;
  margin-top: 0.5rem;
`;

const LanguageOption = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 0.7rem 1rem;
  border: none;
  background: ${props => props.active ? '#f0e6ff' : 'white'};
  color: ${props => props.active ? '#6e48aa' : '#333'};
  cursor: pointer;
  font-size: 0.9rem;
  
  &:hover {
    background-color: ${props => props.active ? '#f0e6ff' : '#f8f9fa'};
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid #f1f1f1;
  }
`;

const MobileLanguageSelector = styled.div`
  margin-top: 2rem;
  
  h3 {
    color: white;
    font-size: 1.1rem;
    margin-bottom: 1rem;
    opacity: 0.9;
  }
`;

const MobileLanguageOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const MobileLanguageOption = styled.button`
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.2)' : 'transparent'};
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  color: white;
  padding: 0.7rem 1rem;
  text-align: left;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const LanguageSelector = ({ isMobile = false }) => {
  const { language, changeLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setIsOpen(false);
  };
  
  const getLanguageFlag = (lang) => {
    switch (lang) {
      case 'da': return '🇩🇰';
      case 'no': return '🇳🇴';
      default: return '🇬🇧';
    }
  };
  
  const getLanguageName = (lang) => {
    switch (lang) {
      case 'da': return t.danish;
      case 'no': return t.norwegian;
      default: return t.english;
    }
  };
  
  if (isMobile) {
    return (
      <MobileLanguageSelector>
        <h3>{t.language}</h3>
        <MobileLanguageOptions>
          <MobileLanguageOption 
            active={language === 'en' ? 1 : 0}
            onClick={() => changeLanguage('en')}
          >
            🇬🇧 {t.english}
          </MobileLanguageOption>
          <MobileLanguageOption 
            active={language === 'da' ? 1 : 0}
            onClick={() => changeLanguage('da')}
          >
            🇩🇰 {t.danish}
          </MobileLanguageOption>
          <MobileLanguageOption 
            active={language === 'no' ? 1 : 0}
            onClick={() => changeLanguage('no')}
          >
            🇳🇴 {t.norwegian}
          </MobileLanguageOption>
        </MobileLanguageOptions>
      </MobileLanguageSelector>
    );
  }
  
  return (
    <SelectorContainer>
      <LanguageButton onClick={toggleDropdown}>
        <LanguageIcon>{getLanguageFlag(language)}</LanguageIcon>
        {getLanguageName(language)}
      </LanguageButton>
      
      {isOpen && (
        <DropdownMenu
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <LanguageOption 
            active={language === 'en' ? 1 : 0}
            onClick={() => handleLanguageChange('en')}
          >
            🇬🇧 {t.english}
          </LanguageOption>
          <LanguageOption 
            active={language === 'da' ? 1 : 0}
            onClick={() => handleLanguageChange('da')}
          >
            🇩🇰 {t.danish}
          </LanguageOption>
          <LanguageOption 
            active={language === 'no' ? 1 : 0}
            onClick={() => handleLanguageChange('no')}
          >
            🇳🇴 {t.norwegian}
          </LanguageOption>
        </DropdownMenu>
      )}
    </SelectorContainer>
  );
};

export default LanguageSelector;