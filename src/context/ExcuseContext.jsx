import React, { createContext, useState, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Create context
const ExcuseContext = createContext();

// Custom hook to use the excuse context
export const useExcuse = () => useContext(ExcuseContext);

// Provider component
export const ExcuseProvider = ({ children }) => {
  // State for form inputs
  const [meetingTitle, setMeetingTitle] = useState('');
  const [tone, setTone] = useState('balanced'); // 'serious', 'balanced', 'funny'
  const [category, setCategory] = useState('work'); // 'work', 'social', 'family'
  
  // State for generated excuse
  const [generatedExcuse, setGeneratedExcuse] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  
  // State for saved excuses
  const [savedExcuses, setSavedExcuses] = useState([]);
  
  // Load saved excuses from localStorage on initial render
  useEffect(() => {
    const storedExcuses = localStorage.getItem('savedExcuses');
    if (storedExcuses) {
      setSavedExcuses(JSON.parse(storedExcuses));
    }
    
    const storedSettings = localStorage.getItem('settings');
    if (storedSettings) {
      const { defaultCategory, defaultTone } = JSON.parse(storedSettings);
      setCategory(defaultCategory || 'work');
      setTone(defaultTone || 'balanced');
    }
  }, []);
  
  // Save excuses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('savedExcuses', JSON.stringify(savedExcuses));
  }, [savedExcuses]);
  
  // Save settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('settings', JSON.stringify({
      defaultCategory: category,
      defaultTone: tone
    }));
  }, [category, tone]);
  
  // Function to generate an excuse
  const generateExcuse = async () => {
    if (!meetingTitle.trim()) return;
    
    setIsGenerating(true);
    
    try {
      // In a real app, this would call an API
      // For now, we'll use a simple mock implementation
      setTimeout(() => {
        const excuses = {
          work: {
            serious: [
              "I've been called into an urgent meeting with the leadership team regarding a critical project issue.",
              "Our security team has detected unusual activity on my account that requires immediate attention.",
              "I need to address an unexpected compliance issue that just came up with our latest deployment."
            ],
            balanced: [
              "I have a conflicting deadline for a high-priority deliverable that was just moved up.",
              "I've been asked to join a call with an important client who's having issues with our service.",
              "There's an unexpected system migration happening that requires my supervision."
            ],
            funny: [
              "My keyboard is staging a rebellion and will only type in emoji. 🔥💻😱",
              "My productivity algorithm has determined this meeting conflicts with my optimal coffee-to-work ratio.",
              "My virtual assistant has scheduled me for mandatory cat video research at that exact time."
            ]
          },
          social: {
            serious: [
              "I've been experiencing some concerning health symptoms that require immediate medical attention.",
              "A family emergency has come up that requires my immediate attention and support.",
              "My apartment has a plumbing issue that's causing damage and I need to meet with emergency maintenance."
            ],
            balanced: [
              "I've double-booked myself with another commitment that I can't reschedule.",
              "My car is having issues and I need to take it to the mechanic during that time.",
              "I'm expecting an important delivery that requires a signature."
            ],
            funny: [
              "My pet goldfish is having an existential crisis and needs emotional support.",
              "I've been selected for a random alien abduction that day - it was in the fine print when I signed up for that free trial.",
              "My houseplants have formed a union and scheduled mandatory negotiation talks at that exact time."
            ]
          },
          family: {
            serious: [
              "I've been advised by my doctor to rest due to concerning symptoms I've been experiencing.",
              "There's an urgent matter with my elderly parent that requires my immediate attention.",
              "I need to attend to an unexpected issue with my child's school/healthcare."
            ],
            balanced: [
              "I have a previously scheduled appointment that I can't reschedule on short notice.",
              "My child needs to be picked up early from school/daycare that day.",
              "I have some out-of-town relatives arriving unexpectedly that I need to help."
            ],
            funny: [
              "My houseplants have become sentient and are demanding I read them bedtime stories.",
              "My refrigerator and microwave are having relationship problems and I've been appointed as their mediator.",
              "I've been selected as a participant in a flash mob training session that cannot be rescheduled."
            ]
          }
        };
        
        // Get random excuse based on category and tone
        const categoryExcuses = excuses[category];
        const toneExcuses = categoryExcuses[tone];
        const randomIndex = Math.floor(Math.random() * toneExcuses.length);
        const excuse = toneExcuses[randomIndex];
        
        setGeneratedExcuse(excuse);
        setIsGenerating(false);
      }, 1500); // Simulate API delay
    } catch (error) {
      console.error('Error generating excuse:', error);
      setGeneratedExcuse('Sorry, I could not generate an excuse at this time.');
      setIsGenerating(false);
    }
  };
  
  // Function to save an excuse
  const saveExcuse = () => {
    if (!generatedExcuse) return;
    
    const newExcuse = {
      id: uuidv4(),
      meetingTitle,
      excuse: generatedExcuse,
      category,
      tone,
      timestamp: new Date().toISOString()
    };
    
    setSavedExcuses(prevExcuses => [newExcuse, ...prevExcuses]);
  };
  
  // Function to delete a saved excuse
  const deleteExcuse = (id) => {
    setSavedExcuses(prevExcuses => prevExcuses.filter(excuse => excuse.id !== id));
  };
  
  // Function to copy excuse to clipboard
  const copyExcuseToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        // Could show a toast notification here
        console.log('Excuse copied to clipboard');
      })
      .catch(err => {
        console.error('Failed to copy excuse: ', err);
      });
  };
  
  // Context value
  const value = {
    meetingTitle,
    setMeetingTitle,
    tone,
    setTone,
    category,
    setCategory,
    generatedExcuse,
    isGenerating,
    generateExcuse,
    savedExcuses,
    saveExcuse,
    deleteExcuse,
    copyExcuseToClipboard
  };
  
  return (
    <ExcuseContext.Provider value={value}>
      {children}
    </ExcuseContext.Provider>
  );
};

export default ExcuseContext;