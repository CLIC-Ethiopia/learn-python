/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  BookOpen, Code, Terminal, CheckCircle, Circle, Search, 
  Menu, X, AlertTriangle, Lightbulb, Info, Play, Check, ChevronRight, Award
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { curriculum, Book, Chapter, QuizQuestion } from './data';

// Utility for Tailwind classes
function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

declare global {
  interface Window {
    loadPyodide: (options: any) => Promise<any>;
  }
}

let pyodideInstance: any = null;
let pyodideLoadingPromise: Promise<any> | null = null;

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  
  // State for navigation
  const [activeBookId, setActiveBookId] = useState(curriculum[0].id);
  const [activeChapterId, setActiveChapterId] = useState<string | null>(curriculum[0].chapters[0].id);
  const [isQuizMode, setIsQuizMode] = useState(false);

  // Progress tracking via localStorage
  const [completedItems, setCompletedItems] = useState<string[]>(() => {
    const saved = localStorage.getItem('python_portal_progress');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('python_portal_progress', JSON.stringify(completedItems));
  }, [completedItems]);

  const toggleComplete = (id: string) => {
    setCompletedItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Find active entities
  const activeBook = curriculum.find(b => b.id === activeBookId) || curriculum[0];
  const activeChapter = activeBook.chapters.find(c => c.id === activeChapterId) || activeBook.chapters[0];

  // Filtering based on search
  const filteredCurriculum = useMemo(() => {
    if (!searchQuery) return curriculum;
    const lowerQuery = searchQuery.toLowerCase();
    
    return curriculum.map(book => {
      const filteredChapters = book.chapters.filter(ch => 
        ch.title.toLowerCase().includes(lowerQuery) || 
        ch.learn.toLowerCase().includes(lowerQuery)
      );
      
      const bookMatches = book.title.toLowerCase().includes(lowerQuery);
      
      if (bookMatches || filteredChapters.length > 0) {
        return {
          ...book,
          chapters: bookMatches && filteredChapters.length === 0 ? book.chapters : filteredChapters
        };
      }
      return null;
    }).filter(Boolean) as Book[];
  }, [searchQuery]);

  return (
    <div className="flex h-screen bg-[#020617] text-slate-300 overflow-hidden font-sans">
      
      {/* Mobile sidebar toggle */}
      <button 
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-indigo-500 rounded-md text-white"
      >
        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <div className={cn(
        "fixed md:static inset-y-0 left-0 z-40 w-72 bg-[#0a0f1d] border-r border-slate-800 transform transition-transform duration-300 ease-in-out flex flex-col",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-indigo-400 font-serif italic text-xl font-bold tracking-tight">
              Python Portal
            </h1>
          </div>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-4">Comprehensive Study Suite</p>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            <input 
              type="text" 
              placeholder="Search curriculum..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-1.5 bg-slate-900 border border-slate-700 rounded-full focus:outline-none focus:border-indigo-500 transition-all placeholder-slate-500 text-xs"
            />
          </div>
        </div>

        <div className="flex-1 p-4 space-y-2 overflow-y-auto custom-scrollbar">
          <div className="text-[10px] text-slate-500 uppercase tracking-wider px-2 mb-2">The 7 Minibooks</div>
          {filteredCurriculum.map(book => (
            <div key={book.id} className="mb-4">
              <h2 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2 px-2">
                {book.title}
              </h2>
              <div className="space-y-1">
                {book.chapters.map(chapter => {
                  const isActive = !isQuizMode && activeBookId === book.id && activeChapterId === chapter.id;
                  const isCompleted = completedItems.includes(chapter.id);
                  return (
                    <button
                      key={chapter.id}
                      onClick={() => {
                        setActiveBookId(book.id);
                        setActiveChapterId(chapter.id);
                        setIsQuizMode(false);
                      }}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded text-sm flex items-center gap-3 transition-all duration-200",
                        isActive 
                          ? "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20" 
                          : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-300 border border-transparent"
                      )}
                    >
                      <span onClick={(e) => { e.stopPropagation(); toggleComplete(chapter.id); }} className="cursor-pointer flex-shrink-0">
                        {isCompleted ? <CheckCircle size={14} className="text-emerald-400" /> : <Circle size={14} className="text-slate-500 hover:text-emerald-400" />}
                      </span>
                      <span className="leading-snug truncate">{chapter.title.split(': ')[1] || chapter.title}</span>
                    </button>
                  );
                })}
                
                {/* Quiz Button */}
                <button
                  onClick={() => {
                    setActiveBookId(book.id);
                    setIsQuizMode(true);
                  }}
                  className={cn(
                    "w-full text-left px-3 py-2 rounded text-sm flex items-center gap-3 transition-all duration-200",
                    isQuizMode && activeBookId === book.id
                      ? "bg-purple-500/10 text-purple-300 border border-purple-500/20" 
                      : "text-slate-400 hover:bg-slate-800/50 border border-transparent"
                  )}
                >
                  <Award size={14} className={isQuizMode && activeBookId === book.id ? "text-purple-400" : "text-slate-500"} />
                  <span>Knowledge Check</span>
                </button>
              </div>
            </div>
          ))}
          {filteredCurriculum.length === 0 && (
            <div className="text-center text-slate-500 text-sm py-10">
              No results found for "{searchQuery}"
            </div>
          )}
        </div>
        
        <div className="p-4 bg-slate-900/50 border-t border-slate-800">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] uppercase text-slate-500 tracking-widest">Overall Progress</span>
            <span className="text-[10px] font-mono text-indigo-400">
              {Math.round((completedItems.length / curriculum.reduce((acc, curr) => acc + curr.chapters.length, 0)) * 100) || 0}%
            </span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-1 overflow-hidden">
            <div 
              className="bg-indigo-500 h-1 rounded-full transition-all duration-500"
              style={{ width: `${Math.round((completedItems.length / curriculum.reduce((acc, curr) => acc + curr.chapters.length, 0)) * 100) || 0}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative bg-[#020617]">
        {/* Header */}
        <header className="h-16 border-b border-slate-800 bg-[#0a0f1d]/80 backdrop-blur-sm flex items-center justify-between px-8 z-10 shrink-0">
          <div className="flex items-center gap-4 text-sm">
            <span className="text-slate-500">{activeBook.title}</span>
            <span className="text-slate-700">/</span>
            <span className="text-slate-300">
              {isQuizMode ? 'Knowledge Check' : activeChapter.title}
            </span>
          </div>
        </header>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar flex gap-8">
          <div className="flex-1 flex flex-col gap-6 max-w-5xl mx-auto w-full">
            {isQuizMode ? (
              <QuizView book={activeBook} />
            ) : (
              <>
                <div className="space-y-4">
                  <h2 className="text-3xl font-serif text-white leading-tight italic">
                    {activeChapter.title}
                  </h2>
                </div>
                <ChapterView chapter={activeChapter} />
              </>
            )}
          </div>
        </div>
        
        <footer className="h-12 border-t border-slate-800 bg-[#0a0f1d]/50 flex items-center px-8 justify-between shrink-0">
          <div className="flex gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="text-[10px] text-slate-400">Python Interpreter Ready</span>
            </div>
          </div>
          <div className="flex gap-4 text-[10px] text-slate-500 uppercase tracking-widest">
            <span>Shovic & Simpson</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

// --- Components ---

function ChapterView({ chapter }: { chapter: Chapter }) {
  const [activeTab, setActiveTab] = useState<'learn' | 'syntax' | 'sandbox'>('learn');

  // Reset tab when chapter changes
  useEffect(() => {
    setActiveTab('learn');
  }, [chapter.id]);

  return (
    <div className="flex-1 bg-[#050b1a] rounded-xl border border-slate-800 p-1 flex flex-col min-h-[500px] animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Tabs */}
      <div className="flex gap-1 p-2 bg-slate-900/80 rounded-t-lg">
        <TabButton active={activeTab === 'learn'} onClick={() => setActiveTab('learn')} label="Learn" />
        <TabButton active={activeTab === 'syntax'} onClick={() => setActiveTab('syntax')} label="Syntax Chart" />
        <TabButton active={activeTab === 'sandbox'} onClick={() => setActiveTab('sandbox')} label="Sandbox" />
      </div>

      {/* Tab Content */}
      <div className="p-6 font-mono text-sm overflow-hidden flex-1 overflow-y-auto custom-scrollbar">
        {activeTab === 'learn' && <LearnTab topics={chapter.learn} />}
        {activeTab === 'syntax' && <SyntaxTab items={chapter.syntax} />}
        {activeTab === 'sandbox' && <SandboxTab items={chapter.sandbox} />}
      </div>
    </div>
  );
}

function TabButton({ active, onClick, label }: { active: boolean, onClick: () => void, label: string }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-1 text-[10px] uppercase font-bold rounded transition-all duration-200",
        active 
          ? "bg-indigo-500 text-white" 
          : "text-slate-500 hover:text-slate-300"
      )}
    >
      {label}
    </button>
  );
}

function LearnTab({ topics }: { topics: { title: string; content: string }[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  if (!topics || topics.length === 0) return <div className="text-slate-500">No concepts available.</div>;
  
  const activeTopic = topics[activeIndex];

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full font-sans">
      <div className="md:w-1/3 flex flex-col gap-2 border-r border-slate-800 pr-4 overflow-y-auto custom-scrollbar">
        <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Concepts in this Chapter</div>
        {topics.map((t, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={cn(
              "text-left px-4 py-3 text-sm rounded-lg transition-all duration-200",
              activeIndex === idx 
                ? "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 shadow-sm" 
                : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 border border-transparent"
            )}
          >
            {t.title}
          </button>
        ))}
      </div>
      <div className="md:w-2/3 prose prose-invert prose-slate max-w-none prose-headings:text-indigo-300 prose-a:text-indigo-400 prose-code:text-pink-300 prose-code:bg-slate-800/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md overflow-y-auto pr-4 custom-scrollbar">
        <ReactMarkdown
          components={{
            blockquote({ node, children, ...props }) {
              const text = String(children);
              let type = 'info';
              if (text.includes('**Tip:**')) type = 'tip';
              if (text.includes('**Warning:**')) type = 'warning';
              
              const isTip = type === 'tip';
              const isWarning = type === 'warning';

              return (
                <div className={cn(
                  "my-6 px-6 py-4 rounded-xl border flex gap-4 not-prose items-start",
                  isTip ? "bg-emerald-900/20 border-emerald-700/50 text-emerald-200" :
                  isWarning ? "bg-amber-900/20 border-amber-700/50 text-amber-200" :
                  "bg-indigo-900/20 border-indigo-700/50 text-indigo-200"
                )}>
                  <div className="mt-0.5 flex-shrink-0">
                    {isTip ? <Lightbulb size={20} className="text-emerald-400" /> :
                     isWarning ? <AlertTriangle size={20} className="text-amber-400" /> :
                     <Info size={20} className="text-indigo-400" />}
                  </div>
                  <div className="text-sm leading-relaxed">{children}</div>
                </div>
              );
            }
          }}
        >
          {activeTopic.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

function SyntaxTab({ items }: { items: Chapter['syntax'] }) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  if (!items || items.length === 0) return <div className="text-slate-400">No syntax cheat sheets for this chapter.</div>;

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item, idx) => (
        <div key={idx} className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden flex flex-col">
          <div className="px-4 py-3 bg-slate-800/80 border-b border-slate-700 flex justify-between items-center">
            <div>
              <h4 className="font-medium text-slate-200">{item.name}</h4>
              <p className="text-xs text-slate-400 mt-0.5">{item.description}</p>
            </div>
            <button 
              onClick={() => copyToClipboard(item.code, idx)}
              className="p-2 bg-slate-700 hover:bg-indigo-500 text-slate-300 hover:text-white rounded-md transition-colors"
              title="Copy to clipboard"
            >
              {copiedIndex === idx ? <Check size={16} className="text-emerald-400" /> : <Code size={16} />}
            </button>
          </div>
          <div className="p-4 overflow-x-auto text-sm font-mono text-pink-300">
            <pre><code>{item.code}</code></pre>
          </div>
        </div>
      ))}
    </div>
  );
}

function SandboxTab({ items }: { items: Chapter['sandbox'] }) {
  const [output, setOutput] = useState<string>('Python 3.9 Interactive Sandbox (Pyodide)\nType a command or select a preset below to run.\n>>> ');
  const [input, setInput] = useState('');
  const [isReady, setIsReady] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;
    
    if (pyodideInstance) {
      setIsReady(true);
      return;
    }

    if (!pyodideLoadingPromise) {
      if (window.loadPyodide) {
        pyodideLoadingPromise = window.loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/"
        });
      }
    }

    if (pyodideLoadingPromise) {
      pyodideLoadingPromise.then(py => {
        pyodideInstance = py;
        if (isMounted) setIsReady(true);
      }).catch(err => {
        console.error("Pyodide failed to load", err);
      });
    }

    return () => { isMounted = false; };
  }, []);

  const runCode = async (command: string, presetOutput?: string) => {
    if (!command.trim()) return;
    
    setOutput(prev => `${prev}${command}\n`);
    setInput('');
    
    // Smooth scroll to bottom
    setTimeout(() => {
      endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
    
    if (!isReady || !pyodideInstance) {
       setOutput(prev => `${prev}Loading Python engine... Please wait.\n>>> `);
       return;
    }

    // Try executing using Pyodide
    try {
       // We capture standard output by overriding sys.stdout
       await pyodideInstance.runPythonAsync(`
import sys
import io
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
`);
       let execResult;
       try {
         execResult = await pyodideInstance.runPythonAsync(command);
       } catch (err: any) {
         execResult = err.toString();
       }
       
       const stdoutStr = await pyodideInstance.runPythonAsync(`sys.stdout.getvalue()`);
       const stderrStr = await pyodideInstance.runPythonAsync(`sys.stderr.getvalue()`);
       
       let finalOutput = stdoutStr + stderrStr;
       
       // Handle simulated outputs for missing hardware/data libraries
       const isSimulatedTarget = presetOutput && (command.includes("cv2") || command.includes("gpiozero") || command.includes("pandas") || command.includes("RPi.GPIO") || command.includes("requests"));
       
       if (isSimulatedTarget && (execResult?.includes("ModuleNotFoundError") || execResult?.includes("SyntaxError"))) {
           finalOutput = presetOutput + "\n(Note: Hardware/Data libraries are simulated here due to browser constraints)\n";
       } else {
           // If there's no stdout but we got an expression result, display it
           if (execResult !== undefined && execResult !== null && typeof execResult !== 'function') {
              if (!finalOutput.trim()) {
                 finalOutput = execResult.toString() + "\n";
              }
           }
       }
       
       setOutput(prev => `${prev}${finalOutput}>>> `);
       
    } catch (e: any) {
       setOutput(prev => `${prev}Error: ${e.message || e.toString()}\n>>> `);
    }
    
    setTimeout(() => {
      endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      runCode(input);
    }
  };

  return (
    <div className="flex flex-col h-full min-h-[500px] gap-4 font-sans">
      <div className="flex-1 bg-black border border-slate-700 rounded-xl overflow-y-auto p-4 font-mono text-sm text-emerald-400 whitespace-pre-wrap custom-scrollbar">
        {output}
        <span className="animate-pulse">_</span>
        <div ref={endRef} />
      </div>
      
      <div className="flex gap-3">
        <textarea 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type Python code here... (Press Enter to run, Shift+Enter for new line)"
          className="flex-1 bg-slate-900 border border-slate-700 rounded-xl p-3 font-mono text-sm text-slate-200 focus:outline-none focus:border-indigo-500 resize-none h-24 custom-scrollbar"
        />
        <div className="flex flex-col gap-2 justify-end">
          <button 
            onClick={() => runCode(input)}
            disabled={!isReady}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
          >
            Run Code
          </button>
          <button 
            onClick={() => setOutput('Python 3.9.0 Interactive Sandbox\nType a command or select a preset below to run.\n>>> ')}
            className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium rounded-xl transition-colors border border-slate-700"
          >
            Clear
          </button>
        </div>
      </div>

      {items && items.length > 0 && (
        <div className="mt-2 pt-4 border-t border-slate-800">
          <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Preset Commands</h4>
          <div className="flex flex-wrap gap-2">
            {items.map((item, idx) => (
              <button
                key={idx}
                onClick={() => runCode(item.command, item.output)}
                className="px-3 py-1.5 bg-slate-800/50 hover:bg-indigo-500/20 hover:text-indigo-300 border border-slate-700 hover:border-indigo-500/50 rounded-lg text-xs font-mono text-slate-400 transition-all flex items-center gap-2"
              >
                <Play size={12} className="opacity-70" />
                {item.command.split('\n')[0]}{item.command.includes('\n') ? '...' : ''}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function QuizView({ book }: { book: Book }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Reset quiz when book changes
  useEffect(() => {
    setCurrentQ(0);
    setSelectedOpt(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  }, [book.id]);

  const questions = book.quiz;

  if (!questions || questions.length === 0) {
    return <div className="text-center p-10 text-slate-400">No quiz available for this book.</div>;
  }

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOpt(idx);
    setIsAnswered(true);
    if (idx === questions[currentQ].answer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(q => q + 1);
      setSelectedOpt(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setSelectedOpt(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-10 text-center animate-in zoom-in-95 duration-500">
        <Award size={64} className="mx-auto text-purple-400 mb-6" />
        <h3 className="text-3xl font-bold text-white mb-2">Quiz Completed!</h3>
        <p className="text-slate-300 text-lg mb-8">You scored {score} out of {questions.length}.</p>
        <div className="h-4 w-full bg-slate-900 rounded-full max-w-md mx-auto mb-8 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-1000"
            style={{ width: `${(score / questions.length) * 100}%` }}
          />
        </div>
        <button 
          onClick={restartQuiz}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-colors"
        >
          Retake Quiz
        </button>
      </div>
    );
  }

  const q = questions[currentQ];

  return (
    <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 md:p-10 animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-8">
        <span className="text-sm font-medium text-slate-400">Question {currentQ + 1} of {questions.length}</span>
        <span className="text-sm font-bold text-purple-400">Score: {score}</span>
      </div>
      
      <h3 className="text-2xl font-medium text-white mb-8 leading-tight">{q.question}</h3>
      
      <div className="space-y-3 mb-8">
        {q.options.map((opt, idx) => {
          const isSelected = selectedOpt === idx;
          const isCorrect = idx === q.answer;
          
          let btnClass = "bg-slate-900 border-slate-700 hover:border-indigo-500 text-slate-300";
          
          if (isAnswered) {
            if (isCorrect) {
              btnClass = "border-emerald-500 bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/50";
            } else if (isSelected) {
              btnClass = "border-rose-500 bg-rose-500/10 text-rose-300 ring-1 ring-rose-500/50";
            } else {
              btnClass = "border-slate-800 bg-slate-900 text-slate-600 opacity-50";
            }
          } else if (isSelected) {
            btnClass = "border-indigo-500/50 bg-indigo-500/10 text-indigo-300 ring-1 ring-indigo-500/50";
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={isAnswered}
              className={cn(
                "w-full text-left p-3 rounded-lg border transition-all duration-200 text-sm",
                btnClass
              )}
            >
              {String.fromCharCode(65 + idx)}. {opt}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className="animate-in slide-in-from-bottom-4 fade-in duration-300">
          <div className={cn(
            "p-5 rounded-xl border mb-6",
            selectedOpt === q.answer 
              ? "bg-emerald-900/20 border-emerald-700/50 text-emerald-200" 
              : "bg-rose-900/20 border-rose-700/50 text-rose-200"
          )}>
            <h4 className="font-bold flex items-center gap-2 mb-2">
              {selectedOpt === q.answer ? <CheckCircle size={18} /> : <AlertTriangle size={18} />}
              {selectedOpt === q.answer ? 'Correct!' : 'Incorrect'}
            </h4>
            <p className="text-sm leading-relaxed opacity-90">{q.explanation}</p>
          </div>
          <button 
            onClick={handleNext}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-colors flex items-center gap-2 ml-auto"
          >
            {currentQ < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}

