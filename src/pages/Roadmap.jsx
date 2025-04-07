import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

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
  const { t } = useLanguage();
  
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
            <Title>{t.excuseCalendarRoadmap}</Title>
            
            <Section>
              <SectionTitle>{t.currentFeatures}</SectionTitle>
              <FeatureList>
                <FeatureItem completed>
                  <FeatureTitle>Excuse Generation</FeatureTitle>
                  <FeatureDescription>{t.excuseGenerationDesc}</FeatureDescription>
                </FeatureItem>
                <FeatureItem completed>
                  <FeatureTitle>Save Favorites</FeatureTitle>
                  <FeatureDescription>{t.saveFavoritesDesc}</FeatureDescription>
                </FeatureItem>
                <FeatureItem completed>
                  <FeatureTitle>Copy to Clipboard</FeatureTitle>
                  <FeatureDescription>{t.copyToClipboardDesc}</FeatureDescription>
                </FeatureItem>
                <FeatureItem completed>
                  <FeatureTitle>Mobile Responsive</FeatureTitle>
                  <FeatureDescription>{t.mobileResponsiveDesc}</FeatureDescription>
                </FeatureItem>
              </FeatureList>
            </Section>
            
            <Section>
              <SectionTitle>{t.comingSoon}</SectionTitle>
              <FeatureList>
                <FeatureItem inProgress>
                  <FeatureTitle>AI-Powered Excuses</FeatureTitle>
                  <FeatureDescription>{t.aiPoweredExcusesDesc}</FeatureDescription>
                </FeatureItem>
                <FeatureItem inProgress>
                  <FeatureTitle>Calendar Integration</FeatureTitle>
                  <FeatureDescription>{t.calendarIntegrationDesc}</FeatureDescription>
                </FeatureItem>
              </FeatureList>
            </Section>
            
            <Section>
              <SectionTitle>{t.futurePlans}</SectionTitle>
              <FeatureList>
                <FeatureItem>
                  <FeatureTitle>User Accounts</FeatureTitle>
                  <FeatureDescription>{t.userAccountsDesc}</FeatureDescription>
                </FeatureItem>
                <FeatureItem>
                  <FeatureTitle>Excuse Templates</FeatureTitle>
                  <FeatureDescription>{t.excuseTemplatesDesc}</FeatureDescription>
                </FeatureItem>
                <FeatureItem>
                  <FeatureTitle>Sharing Options</FeatureTitle>
                  <FeatureDescription>{t.sharingOptionsDesc}</FeatureDescription>
                </FeatureItem>
                <FeatureItem>
                  <FeatureTitle>Excuse Analytics</FeatureTitle>
                  <FeatureDescription>{t.excuseAnalyticsDesc}</FeatureDescription>
                </FeatureItem>
                <FeatureItem>
                  <FeatureTitle>Dark Mode</FeatureTitle>
                  <FeatureDescription>{t.darkModeDesc}</FeatureDescription>
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