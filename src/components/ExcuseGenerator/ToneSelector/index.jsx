import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useExcuse } from '../../../context/ExcuseContext';
import { useLanguage } from '../../../context/LanguageContext';

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

const SliderContainer = styled.div`
  padding: 0 0.5rem;
`;

const SliderLabels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
  color: #6c757d;
`;

const Slider = styled.input`
  width: 100%;
  -webkit-appearance: none;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(to right, #6e48aa, #9d50bb, #ff9a9e);
  outline: none;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    border: 2px solid #9d50bb;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    border: 2px solid #9d50bb;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const CurrentTone = styled.div`
  text-align: center;
  margin-top: 0.5rem;
  font-weight: 500;
  color: #9d50bb;
`;

const ToneSelector = () => {
  const { tone, setTone } = useExcuse();
  const { t } = useLanguage();
  
  const handleToneChange = (e) => {
    const value = Number.parseInt(e.target.value, 10);
    if (value === 0) setTone('serious');
    else if (value === 1) setTone('balanced');
    else setTone('funny');
  };
  
  const getToneValue = () => {
    if (tone === 'serious') return 0;
    if (tone === 'balanced') return 1;
    return 2;
  };
  
  const getToneLabel = () => {
    if (tone === 'serious') return t.seriousAndBelievable;
    if (tone === 'balanced') return t.balanced;
    return t.funnyAndCreative;
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <SelectorContainer>
        <Label>{t.excuseTone}</Label>
        <SliderContainer>
          <SliderLabels>
            <span>{t.serious}</span>
            <span>{t.funny}</span>
          </SliderLabels>
          <Slider
            type="range"
            min="0"
            max="2"
            step="1"
            value={getToneValue()}
            onChange={handleToneChange}
          />
          <CurrentTone>{getToneLabel()}</CurrentTone>
        </SliderContainer>
      </SelectorContainer>
    </motion.div>
  );
};

export default ToneSelector;