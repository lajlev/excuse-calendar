import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useExcuse } from '../../context/ExcuseContext';
import ToneSelector from './ToneSelector';
import CategorySelector from './CategorySelector';
import GenerateButton from './GenerateButton';
import ExcuseDisplay from './ExcuseDisplay';

const ExcuseGeneratorContainer = styled.div`
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

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ControlsRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ExcuseGenerator = () => {
  const { generatedExcuse } = useExcuse();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ExcuseGeneratorContainer>
        
        <Form>
          
          <ControlsRow>
            <CategorySelector />
            <ToneSelector />
          </ControlsRow>
          
          <GenerateButton />
          
          {generatedExcuse && <ExcuseDisplay />}
        </Form>
      </ExcuseGeneratorContainer>
    </motion.div>
  );
};

export default ExcuseGenerator;