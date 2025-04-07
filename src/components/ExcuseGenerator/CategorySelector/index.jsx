import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useExcuse } from '../../../context/ExcuseContext';

const SelectorContainer = styled.div`
  flex: 1;
  min-width: 200px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #495057;
`;

const CategoryOptions = styled.div`
  display: flex;
  gap: 0.5rem;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid #ced4da;
`;

const CategoryOption = styled.button`
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

const categories = [
  { id: 'work', label: 'Work' },
  { id: 'social', label: 'Social' },
  { id: 'family', label: 'Family' }
];

const CategorySelector = () => {
  const { category, setCategory } = useExcuse();
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <SelectorContainer>
        <Label>Excuse Category</Label>
        <CategoryOptions>
          {categories.map(cat => (
            <CategoryOption
              key={cat.id}
              active={category === cat.id ? 1 : 0}
              onClick={() => setCategory(cat.id)}
            >
              {cat.label}
            </CategoryOption>
          ))}
        </CategoryOptions>
      </SelectorContainer>
    </motion.div>
  );
};

export default CategorySelector;