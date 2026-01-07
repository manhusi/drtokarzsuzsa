import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, Sparkles, RefreshCw, CalendarCheck, Heart } from 'lucide-react';
import { GoogleGenAI, FunctionDeclaration, Type } from "@google/genai";
import { FULL_SERVICES_DATA } from '../constants';

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

// Define the tool for recommending an examination
const recommendExaminationFunction: FunctionDeclaration = {
  name: 'recommendExamination',
  parameters: {
    type: Type.OBJECT,
    description: 'Recommend a specific cardiology examination to the patient and explain why.',
    properties: {
      examinationName: {
        type: Type.STRING,
        description: 'The exact name of the examination from the available list.',
      },
      reasoning: {
        type: Type.STRING,
        description: 'A brief, friendly explanation of why this examination fits the patient needs (in Hungarian).',
      },
    },
    required: ['examinationName', 'reasoning'],
  },
};

const DEFAULT_SUGGESTIONS = ['Mellkasi fájdalom', 'Magas vérnyomás', 'Szívdobogásérzés', 'Szűrővizsgálat'];

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<{ id: number; sender: 'bot' | 'user'; text?: string; isRecommendation?: boolean; serviceData?: any }[]>([
    {
      id: 1,
      sender: 'bot',
      text: 'Üdvözlöm! Dr. Tokár Zsuzsanna Kardiológiai Magánrendelésének virtuális asszisztense vagyok. Segítek megtalálni az Ön számára megfelelő vizsgálatot. Milyen panasza van, vagy miben segíthetek?'
    },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatSession, setChatSession] = useState<any>(null);
  const [currentSuggestions, setCurrentSuggestions] = useState<string[]>(DEFAULT_SUGGESTIONS);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      const { scrollHeight, clientHeight } = scrollContainerRef.current;
      scrollContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(scrollToBottom, 100);
    return () => clearTimeout(timeoutId);
  }, [messages, isTyping, currentSuggestions]);

  const parseResponse = (text: string) => {
    const optionsRegex = /\[OPTIONS: (.*?)\]/;
    const match = text.match(optionsRegex);

    let cleanText = text;
    let newSuggestions: string[] = [];

    if (match && match[1]) {
      newSuggestions = match[1].split('|').map(s => s.trim());
      cleanText = text.replace(match[0], '').trim();
    }

    return { cleanText, newSuggestions };
  };

  useEffect(() => {
    const initChat = async () => {
      const chat = ai.chats.create({
        model: 'gemini-2.0-flash-001',
        config: {
          systemInstruction: `Te Dr. Tokár Zsuzsanna Kardiológiai Magánrendelésének virtuális asszisztense vagy Nyíregyházán. 
          A célod, hogy segíts a pácienseknek megtalálni a számukra megfelelő kardiológiai vizsgálatot 2-3 célzott kérdés feltevésével.
          Magyarul beszélj. Légy udvarias, professzionális, és együttérző. 
          Tartsd a válaszaidat tömören (max 2-3 mondat).

          FONTOS: A pácienst már üdvözöltük. NE mutatkozz be újra. NE mondd, hogy "Üdvözlöm". Kezdj egyből a páciens problémájával/inputjával.
          
          FONTOS SZABÁLY:
          Minden kérdésed végére adj 3-4 rövid, kattintható opciót.
          Formázd így a végén: 
          [OPTIONS: Opció 1 | Opció 2 | Opció 3]

          Példa: 
          "Milyen jellegű a panasz?"
          [OPTIONS: Mellkasi fájdalom | Szívdobogás | Légszomj | Fáradékonyság]
          
          Elérhető vizsgálatok és szolgáltatások:
          ${JSON.stringify(FULL_SERVICES_DATA)}

          Folyamat:
          1. Kérdezd meg milyen panasza van (mellkasi fájdalom, szívdobogás, magas vérnyomás, stb.). Add meg [OPTIONS: ...]
          2. Kérdezz pontosító kérdéseket (mióta van, milyen gyakran, terhelésre fokozódik-e). Add meg [OPTIONS: ...]
          3. Ha azonosítottad a megfelelő vizsgálatot, használd a 'recommendExamination' eszközt.
          
          Vizsgálat típusok áttekintése:
          - Kardiológiai konzultáció: Általános vizsgálat, első alkalom
          - EKG: Ritmuszavarok, szívdobogásérzés
          - Szívultrahang: Billentyűbetegség, szívelégtelenség gyanúja
          - Terheléses EKG: Koszorúér-betegség gyanúja, mellkasi fájdalom
          - Holter: Ritmuszavar, ájulás, szívdobogás kivizsgálása
          - ABPM: Magas vérnyomás kivizsgálása, terápia beállítása
          
          FONTOS: Ha sürgős panaszról van szó (akut mellkasi fájdalom, ájulás, súlyos légszomj), MINDIG javasold a mentő hívását (104) vagy sürgősségi ellátást!
          `,
          tools: [{ functionDeclarations: [recommendExaminationFunction] }],
        },
      });
      setChatSession(chat);
    };

    initChat();
  }, []);

  const handleSend = async (overrideText?: string) => {
    const textToSend = overrideText || inputValue;
    if (!textToSend.trim() || !chatSession) return;

    const newMsg = { id: Date.now(), sender: 'user' as const, text: textToSend };
    setMessages(prev => [...prev, newMsg]);
    setInputValue('');
    setCurrentSuggestions([]);
    setIsTyping(true);

    try {
      const response = await chatSession.sendMessage({ message: textToSend });
      setIsTyping(false);

      const functionCalls = response.functionCalls;

      if (functionCalls && functionCalls.length > 0) {
        const call = functionCalls[0];
        if (call.name === 'recommendExamination') {
          const { examinationName, reasoning } = call.args as any;

          setMessages(prev => [...prev, {
            id: Date.now() + 1,
            sender: 'bot',
            isRecommendation: true,
            serviceData: { name: examinationName, reason: reasoning }
          }]);

          setCurrentSuggestions(['Időpontfoglalás', 'Másik kérdésem van', 'Újrakezdés']);
        }
      } else {
        const rawText = response.text;
        const { cleanText, newSuggestions } = parseResponse(rawText);

        setMessages(prev => [...prev, {
          id: Date.now() + 1,
          sender: 'bot',
          text: cleanText
        }]);

        if (newSuggestions.length > 0) {
          setCurrentSuggestions(newSuggestions);
        } else {
          setCurrentSuggestions([]);
        }
      }

    } catch (error) {
      console.error("Chat error:", error);
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        sender: 'bot',
        text: 'Elnézést, egy kis technikai hiba történt. Kérem próbálja újra később, vagy hívja rendelőnket: 30/551-6668.'
      }]);
      setCurrentSuggestions(DEFAULT_SUGGESTIONS);
    }
  };

  const handleBookingClick = () => {
    window.location.href = '/foglalas';
  };

  const restartChat = () => {
    setMessages([{
      id: 1,
      sender: 'bot',
      text: 'Üdvözlöm! Dr. Tokár Zsuzsanna Kardiológiai Magánrendelésének virtuális asszisztense vagyok. Segítek megtalálni az Ön számára megfelelő vizsgálatot. Milyen panasza van, vagy miben segíthetek?'
    }]);
    setIsTyping(false);

    const chat = ai.chats.create({
      model: 'gemini-2.0-flash-001',
      config: {
        systemInstruction: `Te Dr. Tokár Zsuzsanna Kardiológiai Magánrendelésének virtuális asszisztense vagy Nyíregyházán. 
          A célod, hogy segíts a pácienseknek megtalálni a számukra megfelelő kardiológiai vizsgálatot.
          Magyarul beszélj. Légy udvarias, professzionális, és együttérző. 
          Tartsd a válaszaidat tömören.

          FONTOS: A pácienst már üdvözöltük. NE mutatkozz be újra.
          
          Minden kérdésed végére adj 3-4 opciót:
          [OPTIONS: Opció 1 | Opció 2 | Opció 3]
          
          Szolgáltatások:
          ${JSON.stringify(FULL_SERVICES_DATA)}

          Ha azonosítottad a vizsgálatot, használd a 'recommendExamination' eszközt.
          `,
        tools: [{ functionDeclarations: [recommendExaminationFunction] }],
      },
    });
    setChatSession(chat);
    setCurrentSuggestions(DEFAULT_SUGGESTIONS);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-primary-800 rounded-3xl shadow-2xl shadow-black/50 overflow-hidden border border-accent-400/20 flex flex-col h-[500px] md:h-[600px] relative z-20 backdrop-blur-sm transition-all duration-300">
      {/* Premium Header */}
      <div className="bg-primary-900 p-4 border-b border-accent-400/20 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-accent-400/30">
              <Heart size={20} strokeWidth={1.5} fill="currentColor" />
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-primary-900 rounded-full"></span>
          </div>
          <div>
            <h3 className="font-heading font-bold text-white text-base leading-tight">Kardiológiai Tanácsadó</h3>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              <p className="text-accent-400 text-[10px] font-medium uppercase tracking-wide">Dr. Tokár Zsuzsanna</p>
            </div>
          </div>
        </div>
        <button
          onClick={restartChat}
          className="p-2 text-gray-500 hover:text-accent-400 hover:bg-accent-400/10 rounded-full transition-colors"
          title="Beszélgetés újrakezdése"
        >
          <RefreshCw size={16} />
        </button>
      </div>

      {/* Messages Area */}
      <div
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-primary-800 to-primary-900 scrollbar-thin scrollbar-thumb-gray-700"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex w-full animate-fade-in ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.isRecommendation ? (
              <div className="w-full max-w-[95%]">
                <div className="bg-gradient-to-br from-primary-700 to-primary-800 border border-accent-400/30 rounded-2xl p-5 shadow-lg">
                  <div className="flex items-center gap-2 mb-3 text-accent-400 font-bold uppercase text-xs tracking-wider">
                    <Sparkles size={14} /> Javasolt vizsgálat
                  </div>
                  <h4 className="text-xl font-heading font-bold text-white mb-2">
                    {msg.serviceData.name}
                  </h4>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {msg.serviceData.reason}
                  </p>
                  <button
                    onClick={handleBookingClick}
                    className="w-full bg-gradient-to-r from-accent-400 to-accent-500 text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:from-accent-500 hover:to-accent-600 hover:shadow-lg hover:shadow-accent-400/20 transition-all transform hover:scale-[1.02]"
                  >
                    <CalendarCheck size={18} />
                    Időpontot kérek
                  </button>
                  <p className="text-center text-xs text-gray-500 mt-3">
                    Vagy hívjon: 30/551-6668
                  </p>
                </div>
              </div>
            ) : (
              <div
                className={`max-w-[85%] p-4 rounded-2xl text-[15px] leading-relaxed shadow-sm ${msg.sender === 'user'
                  ? 'bg-gradient-to-r from-accent-400 to-accent-500 text-white rounded-br-none'
                  : 'bg-primary-700 text-gray-200 border border-gray-600 rounded-bl-none'
                  }`}
              >
                {msg.text}
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start w-full animate-fade-in">
            <div className="flex items-center gap-2 bg-primary-700 border border-gray-600 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm">
              <span className="text-xs text-gray-400 font-medium mr-1">Gondolkodik...</span>
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full animate-bounce delay-75"></span>
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full animate-bounce delay-150"></span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Suggestion Chips Area */}
      {currentSuggestions.length > 0 && (
        <div className="px-4 pb-2 bg-primary-800 border-t border-primary-700 pt-2 shrink-0">
          <div className="grid grid-cols-2 gap-2">
            {currentSuggestions.map((chip, idx) => (
              <button
                key={`${chip}-${idx}`}
                onClick={() => handleSend(chip)}
                className="text-center whitespace-normal text-xs font-bold bg-primary-700 text-gray-300 px-2 py-2 rounded-lg border border-gray-600 hover:border-accent-400 hover:bg-accent-400/10 hover:text-accent-400 transition-all shadow-sm active:scale-95 flex items-center justify-center gap-1 group min-h-[40px]"
              >
                {chip}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="p-3 bg-primary-900 border-t border-primary-700 shrink-0">
        <div className="relative flex items-center gap-2 group">
          <input
            id="chatbot-input"
            type="text"
            placeholder="Írja le panaszát..."
            className="w-full bg-primary-700 text-gray-200 text-sm rounded-xl py-3 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-accent-400/30 focus:bg-primary-600 transition-all border border-gray-600 focus:border-accent-400/50 placeholder-gray-500"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={() => handleSend()}
            disabled={!inputValue.trim()}
            className="absolute right-2 p-1.5 bg-accent-400 text-white rounded-lg hover:bg-accent-500 disabled:opacity-50 disabled:hover:bg-accent-400 transition-all shadow-md hover:shadow-lg"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};