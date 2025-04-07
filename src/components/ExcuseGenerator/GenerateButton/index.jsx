import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useExcuse } from '../../../context/ExcuseContext';
import { useLanguage } from '../../../context/LanguageContext';

const ButtonContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background: linear-gradient(135deg, #6e48aa 0%, #9d50bb 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(157, 80, 187, 0.25);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(157, 80, 187, 0.35);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(157, 80, 187, 0.25);
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  margin-left: 0.5rem;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const GenerateButton = () => {
  const { generateExcuse, isGenerating } = useExcuse();
  const { t } = useLanguage();
  
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <ButtonContainer>
        <Button 
          onClick={generateExcuse}
          disabled={isGenerating}
        >
          {isGenerating ? (
            <>
              {t.generating}
              <LoadingSpinner />
            </>
          ) : (
            t.generateExcuse
          )}
        </Button>
      </ButtonContainer>
    </motion.div>
  );
};

export default GenerateButton;