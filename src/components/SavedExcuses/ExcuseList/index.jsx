import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ExcuseCard from '../ExcuseCard';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ExcuseList = ({ excuses }) => {
  return (
    <ListContainer>
      <AnimatePresence>
        {excuses.map((excuse, index) => (
          <motion.div
            key={excuse.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <ExcuseCard excuse={excuse} />
          </motion.div>
        ))}
      </AnimatePresence>
    </ListContainer>
  );
};

export default ExcuseList;