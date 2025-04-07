import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useExcuse } from '../../context/ExcuseContext';
import ExcuseList from './ExcuseList';

const SavedExcusesContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #6e48aa;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const FilterContainer = styled.div`
  margin-bottom: 2rem;
`;

const FilterLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #495057;
`;

const FilterOptions = styled.div`
  display: flex;
  gap: 0.5rem;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid #ced4da;
`;

const FilterOption = styled.button`
  flex: 1;
  padding: 0.75rem 0.5rem;
  background-color: ${props => props.active ? '#9d50bb' : 'white'};
  color: ${props => props.active ? 'white' : '#495057'};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  
  &:hover {
    background-color: ${props => props.active ? '#9d50bb' : '#f8f9fa'};
  }
  
  &:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  
  &:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  color: #6c757d;
`;

const EmptyStateIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const EmptyStateText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;

const EmptyStateButton = styled.button`
  background: linear-gradient(135deg, #6e48aa 0%, #9d50bb 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(157, 80, 187, 0.25);
  }
`;

const categories = [
  { id: 'all', label: 'All' },
  { id: 'work', label: 'Work' },
  { id: 'social', label: 'Social' },
  { id: 'family', label: 'Family' }
];

const SavedExcuses = () => {
  const { savedExcuses } = useExcuse();
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filteredExcuses = activeFilter === 'all'
    ? savedExcuses
    : savedExcuses.filter(excuse => excuse.category === activeFilter);
  
  const handleNavigateToHome = () => {
    // Using window.location would cause a full page reload
    // We'll keep this function for future enhancements
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SavedExcusesContainer>
        <Title>Your Saved Excuses</Title>
        
        {savedExcuses.length > 0 ? (
          <>
            <FilterContainer>
              <FilterLabel>Filter by Category</FilterLabel>
              <FilterOptions>
                {categories.map(cat => (
                  <FilterOption
                    key={cat.id}
                    active={activeFilter === cat.id ? 1 : 0}
                    onClick={() => setActiveFilter(cat.id)}
                  >
                    {cat.label}
                  </FilterOption>
                ))}
              </FilterOptions>
            </FilterContainer>
            
            <ExcuseList excuses={filteredExcuses} />
          </>
        ) : (
          <EmptyState>
            <EmptyStateIcon>📝</EmptyStateIcon>
            <EmptyStateText>
              You haven't saved any excuses yet. Generate some excuses and save your favorites!
            </EmptyStateText>
            <EmptyStateButton as="a" href="/">
              Generate Excuses
            </EmptyStateButton>
          </EmptyState>
        )}
      </SavedExcusesContainer>
    </motion.div>
  );
};

export default SavedExcuses;