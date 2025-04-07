import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useExcuse } from '../../../context/ExcuseContext';
import { useLanguage } from '../../../context/LanguageContext';

const Card = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  border-left: 4px solid ${props => {
    switch(props.category) {
      case 'work': return '#6e48aa';
      case 'social': return '#ff9a9e';
      case 'family': return '#a1c4fd';
      default: return '#9d50bb';
    }
  }};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;


const Category = styled.span`
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background-color: ${props => {
    switch(props.category) {
      case 'work': return '#e9d8fd';
      case 'social': return '#fed7d7';
      case 'family': return '#d6eaff';
      default: return '#e9d8fd';
    }
  }};
  color: ${props => {
    switch(props.category) {
      case 'work': return '#553c9a';
      case 'social': return '#e53e3e';
      case 'family': return '#3182ce';
      default: return '#553c9a';
    }
  }};
`;

const ExcuseText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #495057;
  margin-bottom: 1.5rem;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Timestamp = styled.span`
  font-size: 0.8rem;
  color: #6c757d;
`;

const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  background-color: transparent;
  color: #6c757d;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f1f3f5;
    color: ${props => props.delete ? '#e53e3e' : '#6e48aa'};
  }
`;

const ExcuseCard = ({ excuse }) => {
  const { deleteExcuse, copyExcuseToClipboard } = useExcuse();
  const { language, t } = useLanguage();
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const locale = language === 'da' ? 'da-DK' : language === 'no' ? 'nb-NO' : 'en-US';
    return new Intl.DateTimeFormat(locale, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  const handleCopy = () => {
    copyExcuseToClipboard(excuse.excuse);
  };
  
  const handleDelete = () => {
    deleteExcuse(excuse.id);
  };
  
  return (
    <Card category={excuse.category}>
      <CardHeader>
        <Category category={excuse.category}>
          {t[excuse.category]}
        </Category>
      </CardHeader>
      
      <ExcuseText>"{excuse.excuse}"</ExcuseText>
      
      <CardFooter>
        <Timestamp>{formatDate(excuse.timestamp)}</Timestamp>
        <Actions>
          <ActionButton onClick={handleCopy} title={t.copy}>
            📋
          </ActionButton>
          <ActionButton delete onClick={handleDelete} title="Delete excuse">
            🗑️
          </ActionButton>
        </Actions>
      </CardFooter>
    </Card>
  );
};

export default ExcuseCard;