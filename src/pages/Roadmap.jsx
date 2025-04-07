import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RoadmapContainer = styled.div`
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

const Section = styled.div`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h3`
  color: #6e48aa;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  border-bottom: 2px solid #f0e6ff;
  padding-bottom: 0.5rem;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
  
  &:before {
    content: '${props => props.completed ? '✅' : props.inProgress ? '🔄' : '🔮'}';
    position: absolute;
    left: 0;
  }
`;

const FeatureTitle = styled.h4`
  margin: 0 0 0.5rem 0;
  color: #343a40;
`;

const FeatureDescription = styled.p`
  margin: 0;
  color: #6c757d;
`;

const Roadmap = () => {
  return (
    <div className="roadmap-page">
      <Header />
      <main>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <RoadmapContainer>
            <Title>Excuse Calendar Roadmap</Title>
            
            <Section>
              <SectionTitle>Current Features</SectionTitle>
              <FeatureList>
                <FeatureItem completed>
                  <FeatureTitle>Excuse Generation</FeatureTitle>
                  <FeatureDescription>Generate excuses based on category and tone preferences.</FeatureDescription>
                </FeatureItem>
                <FeatureItem completed>
                  <FeatureTitle>Save Favorites</FeatureTitle>
                  <FeatureDescription>Save your favorite excuses for later use.</FeatureDescription>
                </FeatureItem>
                <FeatureItem completed>
                  <FeatureTitle>Copy to Clipboard</FeatureTitle>
                  <FeatureDescription>Easily copy excuses to your clipboard with one click.</FeatureDescription>
                </FeatureItem>
                <FeatureItem completed>
                  <FeatureTitle>Mobile Responsive</FeatureTitle>
                  <FeatureDescription>Fully responsive design that works on all devices.</FeatureDescription>
                </FeatureItem>
              </FeatureList>
            </Section>
            
            <Section>
              <SectionTitle>Coming Soon</SectionTitle>
              <FeatureList>
                <FeatureItem inProgress>
                  <FeatureTitle>AI-Powered Excuses</FeatureTitle>
                  <FeatureDescription>Integration with AI to generate even more creative and personalized excuses.</FeatureDescription>
                </FeatureItem>
                <FeatureItem inProgress>
                  <FeatureTitle>Calendar Integration</FeatureTitle>
                  <FeatureDescription>Connect with your calendar to generate excuses for specific events.</FeatureDescription>
                </FeatureItem>
              </FeatureList>
            </Section>
            
            <Section>
              <SectionTitle>Future Plans</SectionTitle>
              <FeatureList>
                <FeatureItem>
                  <FeatureTitle>User Accounts</FeatureTitle>
                  <FeatureDescription>Create an account to sync your saved excuses across devices.</FeatureDescription>
                </FeatureItem>
                <FeatureItem>
                  <FeatureTitle>Excuse Templates</FeatureTitle>
                  <FeatureDescription>Create and save your own excuse templates.</FeatureDescription>
                </FeatureItem>
                <FeatureItem>
                  <FeatureTitle>Sharing Options</FeatureTitle>
                  <FeatureDescription>Share your excuses directly via email, messaging apps, or social media.</FeatureDescription>
                </FeatureItem>
                <FeatureItem>
                  <FeatureTitle>Excuse Analytics</FeatureTitle>
                  <FeatureDescription>Track which excuses work best for different situations.</FeatureDescription>
                </FeatureItem>
                <FeatureItem>
                  <FeatureTitle>Dark Mode</FeatureTitle>
                  <FeatureDescription>Toggle between light and dark themes for comfortable use at any time.</FeatureDescription>
                </FeatureItem>
              </FeatureList>
            </Section>
          </RoadmapContainer>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Roadmap;