import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useExcuse } from '../../../context/ExcuseContext';
import { useLanguage } from '../../../context/LanguageContext';

const DisplayContainer = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #9d50bb;
`;

const ExcuseText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #495057;
  margin-bottom: 1.5rem;
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`;

const ActionButton = styled.button`
  background-color: ${props => props.primary ? '#9d50bb' : 'white'};
  color: ${props => props.primary ? 'white' : '#6e48aa'};
  border: ${props => props.primary ? 'none' : '1px solid #9d50bb'};
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.primary ? '#6e48aa' : '#f0e6ff'};
  }
`;

const ExcuseDisplay = () => {
  const { generatedExcuse, saveExcuse, copyExcuseToClipboard } = useExcuse();
  const { t } = useLanguage();
  
  const handleCopy = () => {
    copyExcuseToClipboard(generatedExcuse);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <DisplayContainer>
        <ExcuseText>"{generatedExcuse}"</ExcuseText>
        
        <ActionsContainer>
          <ActionButton onClick={handleCopy}>
            <span>📋</span> {t.copy}
          </ActionButton>
          <ActionButton primary onClick={saveExcuse}>
            <span>💾</span> {t.save}
          </ActionButton>
        </ActionsContainer>
      </DisplayContainer>
    </motion.div>
  );
};

export default ExcuseDisplay;