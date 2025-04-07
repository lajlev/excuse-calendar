import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useExcuse } from '../../../context/ExcuseContext';

const InputContainer = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #495057;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 2px solid #ced4da;
  border-radius: 8px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #9d50bb;
    box-shadow: 0 0 0 3px rgba(157, 80, 187, 0.25);
  }
  
  &::placeholder {
    color: #adb5bd;
  }
`;

const MeetingInput = () => {
  const { meetingTitle, setMeetingTitle } = useExcuse();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <InputContainer>
        <Label htmlFor="meeting-title">Meeting or Event Title</Label>
        <Input
          id="meeting-title"
          type="text"
          placeholder="Enter the meeting or event you want to skip..."
          value={meetingTitle}
          onChange={(e) => setMeetingTitle(e.target.value)}
        />
      </InputContainer>
    </motion.div>
  );
};

export default MeetingInput;