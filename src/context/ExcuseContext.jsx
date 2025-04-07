import React, { createContext, useState, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLanguage } from './LanguageContext';

// Create context
const ExcuseContext = createContext();

// Custom hook to use the excuse context
export const useExcuse = () => useContext(ExcuseContext);
// Provider component
export const ExcuseProvider = ({ children }) => {
  // Get language context
  const { language } = useLanguage();
  
  // State for form inputs
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
    
    setIsGenerating(true);
    
    try {
      // In a real app, this would call an API
      // For now, we'll use a simple mock implementation
      setTimeout(() => {
        // English excuses
        const excusesEn = {
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
        
        // Danish excuses
        const excusesDa = {
          work: {
            serious: [
              "Jeg er blevet indkaldt til et akut møde med ledelsesteamet vedrørende et kritisk projektproblem.",
              "Vores sikkerhedsteam har opdaget usædvanlig aktivitet på min konto, der kræver øjeblikkelig opmærksomhed.",
              "Jeg skal håndtere et uventet compliance-problem, der lige er opstået med vores seneste implementering."
            ],
            balanced: [
              "Jeg har en konfliktende deadline for en højprioriteret leverance, der lige er blevet rykket frem.",
              "Jeg er blevet bedt om at deltage i et opkald med en vigtig kunde, der har problemer med vores service.",
              "Der er en uventet systemmigration i gang, der kræver mit tilsyn."
            ],
            funny: [
              "Mit tastatur gør oprør og vil kun skrive i emoji. 🔥💻😱",
              "Min produktivitetsalgoritme har fastslået, at dette møde er i konflikt med mit optimale kaffe-til-arbejde-forhold.",
              "Min virtuelle assistent har planlagt obligatorisk kattevideoanalyse på det tidspunkt."
            ]
          },
          social: {
            serious: [
              "Jeg har oplevet nogle bekymrende helbredssymptomer, der kræver øjeblikkelig lægehjælp.",
              "Der er opstået en familienødsituation, der kræver min øjeblikkelige opmærksomhed og støtte.",
              "Min lejlighed har et VVS-problem, der forårsager skade, og jeg skal mødes med akut vedligeholdelse."
            ],
            balanced: [
              "Jeg har dobbeltbooket mig selv med en anden forpligtelse, som jeg ikke kan ændre.",
              "Min bil har problemer, og jeg skal tage den til mekanikeren i det tidsrum.",
              "Jeg forventer en vigtig levering, der kræver en underskrift."
            ],
            funny: [
              "Min guldfisk har en eksistentiel krise og har brug for følelsesmæssig støtte.",
              "Jeg er blevet udvalgt til en tilfældig rumvæsensbortførelse den dag - det stod med småt, da jeg tilmeldte mig den gratis prøveperiode.",
              "Mine stueplanter har dannet en fagforening og planlagt obligatoriske forhandlingssamtaler på det tidspunkt."
            ]
          },
          family: {
            serious: [
              "Min læge har rådet mig til at hvile på grund af bekymrende symptomer, jeg har oplevet.",
              "Der er en akut sag med min ældre forælder, der kræver min øjeblikkelige opmærksomhed.",
              "Jeg skal tage mig af et uventet problem med mit barns skole/sundhedspleje."
            ],
            balanced: [
              "Jeg har en tidligere planlagt aftale, som jeg ikke kan ændre med kort varsel.",
              "Mit barn skal hentes tidligt fra skole/børnehave den dag.",
              "Jeg har nogle slægtninge fra udenbys, der ankommer uventet, som jeg skal hjælpe."
            ],
            funny: [
              "Mine stueplanter er blevet bevidste og kræver, at jeg læser godnathistorier for dem.",
              "Mit køleskab og min mikrobølgeovn har relationsproblemer, og jeg er blevet udnævnt til deres mægler.",
              "Jeg er blevet udvalgt som deltager i en flash mob-træningssession, der ikke kan ændres."
            ]
          }
        };
        
        // Norwegian excuses
        const excusesNo = {
          work: {
            serious: [
              "Jeg har blitt innkalt til et hastemøte med lederteamet angående et kritisk prosjektproblem.",
              "Sikkerhetsteamet vårt har oppdaget uvanlig aktivitet på kontoen min som krever umiddelbar oppmerksomhet.",
              "Jeg må ta tak i et uventet compliance-problem som nettopp har dukket opp med vår siste implementering."
            ],
            balanced: [
              "Jeg har en konflikterende frist for en høyt prioritert leveranse som nettopp ble flyttet frem.",
              "Jeg har blitt bedt om å delta i et samtale med en viktig klient som har problemer med tjenesten vår.",
              "Det er en uventet systemmigrasjon som pågår som krever mitt tilsyn."
            ],
            funny: [
              "Tastaturet mitt gjør opprør og vil bare skrive i emoji. 🔥💻😱",
              "Min produktivitetsalgoritme har bestemt at dette møtet er i konflikt med mitt optimale kaffe-til-arbeid-forhold.",
              "Min virtuelle assistent har planlagt obligatorisk kattevideo-forskning på akkurat det tidspunktet."
            ]
          },
          social: {
            serious: [
              "Jeg har opplevd noen bekymringsfulle helsesymptomer som krever umiddelbar medisinsk oppmerksomhet.",
              "En familiekrise har oppstått som krever min umiddelbare oppmerksomhet og støtte.",
              "Leiligheten min har et rørleggerproblem som forårsaker skade, og jeg må møte nødvedlikehold."
            ],
            balanced: [
              "Jeg har dobbeltbooket meg selv med en annen forpliktelse som jeg ikke kan endre.",
              "Bilen min har problemer, og jeg må ta den til mekanikeren i det tidsrommet.",
              "Jeg forventer en viktig levering som krever en signatur."
            ],
            funny: [
              "Gullfisken min har en eksistensiell krise og trenger følelsesmessig støtte.",
              "Jeg har blitt valgt ut til en tilfeldig romvesensbortføring den dagen - det stod med liten skrift da jeg meldte meg på den gratis prøveperioden.",
              "Plantene mine har dannet en fagforening og planlagt obligatoriske forhandlingssamtaler på akkurat det tidspunktet."
            ]
          },
          family: {
            serious: [
              "Jeg har blitt rådet av legen min til å hvile på grunn av bekymringsfulle symptomer jeg har opplevd.",
              "Det er en akutt sak med min eldre forelder som krever min umiddelbare oppmerksomhet.",
              "Jeg må ta meg av et uventet problem med barnets skole/helsevesen."
            ],
            balanced: [
              "Jeg har en tidligere planlagt avtale som jeg ikke kan endre på kort varsel.",
              "Barnet mitt må hentes tidlig fra skole/barnehage den dagen.",
              "Jeg har noen slektninger fra utenbys som ankommer uventet som jeg må hjelpe."
            ],
            funny: [
              "Plantene mine har blitt bevisste og krever at jeg leser godnattshistorier for dem.",
              "Kjøleskapet og mikrobølgeovnen min har relasjonsproblemer, og jeg har blitt utnevnt til deres megler.",
              "Jeg har blitt valgt ut som deltaker i en flash mob-treningsøkt som ikke kan endres."
            ]
          }
        };
        
        // Select excuses based on language
        const excuses = language === 'da' ? excusesDa : language === 'no' ? excusesNo : excusesEn;
        
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