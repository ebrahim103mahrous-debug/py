import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Send, User, Loader2, X, Info } from 'lucide-react';
import Markdown from 'react-markdown';
import { auth, googleProvider } from '../lib/firebase';
import { signInWithPopup, signOut, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AIAssistantProps {
  context: string;
}

export function AIAssistant({ context }: AIAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'مرحباً! أنا المساعد الذكي. كيف يمكنني مساعدتك في هذا الدرس؟' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setMessages([{ role: 'assistant', content: 'تم تسجيل الخروج بنجاح. أراك لاحقاً!' }]);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading || !user) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: userMessage,
          context: context,
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.result }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: `حدث خطأ: ${data.error}` }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'عذراً، لم أتمكن من الاتصال بالخادم.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 right-6 w-14 h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-indigo-700 hover:scale-105 transition-all z-40 border-4 border-indigo-100/50"
          >
            <Bot className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 sm:bottom-28 right-4 left-4 sm:left-auto sm:right-6 sm:w-96 bg-white rounded-3xl shadow-2xl z-50 flex flex-col border border-indigo-100 overflow-hidden"
            style={{ height: '500px', maxHeight: '70vh' }}
            dir="rtl"
          >
            <div className="bg-indigo-50/50 px-4 py-2 border-b border-indigo-100 flex items-center gap-2 text-xs text-indigo-700 font-medium">
              <Info className="w-4 h-4 shrink-0 text-indigo-500" />
              <span>هذا المساعد يتطلب تسجيل الدخول للعمل بكفاءة.</span>
            </div>

            <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 p-4 text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">المساعد الذكي للبرمجة</h3>
                  <div className="flex items-center gap-1.5">
                    {user ? (
                       <>
                         <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                         <span className="text-[10px] text-indigo-100 font-medium opacity-90">{user.displayName || 'متصل'}</span>
                       </>
                    ) : (
                       <span className="text-[10px] text-indigo-100 font-medium opacity-90">يتطلب تسجيل الدخول</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {user && (
                    <button 
                      onClick={handleLogout}
                      className="text-[10px] px-2 py-1 bg-white/10 hover:bg-white/20 rounded-lg transition-colors border border-white/20"
                    >
                      تسجيل خروج
                    </button>
                )}
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {!user ? (
              <div className="flex-1 overflow-y-auto p-4 bg-slate-50 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                  <Bot className="w-8 h-8" />
                </div>
                <h4 className="text-sm font-bold text-slate-800 mb-2">مرحباً بك في المساعد الذكي</h4>
                <p className="text-xs text-slate-500 mb-6 max-w-xs leading-relaxed">
                  للتمتع بقدرات الذكاء الاصطناعي القوية والمتكاملة وتحليل الدروس، يرجى تسجيل الدخول بحساب Google.
                </p>
                <button 
                  onClick={handleLogin}
                  className="w-full max-w-[200px] flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-4 shadow border border-gray-200 rounded-xl transition-all"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  متابعة باستخدام Google
                </button>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 relative">
                {messages.map((msg, idx) => (
                  <div 
                    key={idx} 
                    className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'mr-auto flex-row-reverse' : ''}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-200 text-slate-600'}`}>
                      {msg.role === 'user' ? (
                        user.photoURL ? <img src={user.photoURL} alt="User" className="w-full h-full rounded-full object-cover" /> : <User className="w-4 h-4" />
                      ) : <Bot className="w-4 h-4" />}
                    </div>
                    <div 
                      className={`p-3 rounded-2xl text-sm leading-relaxed ${
                        msg.role === 'user' 
                          ? 'bg-indigo-600 text-white rounded-tr-none shadow-sm' 
                          : 'bg-white text-slate-700 rounded-tl-none border border-slate-200 shadow-sm'
                      }`}
                    >
                      {msg.role === 'assistant' ? (
                        <div className="markdown-body prose prose-sm prose-slate max-w-none dark:prose-invert prose-p:leading-relaxed prose-pre:bg-slate-800 prose-pre:text-slate-50">
                          <Markdown>{msg.content}</Markdown>
                        </div>
                      ) : (
                        msg.content
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3 max-w-[85%]">
                    <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center shrink-0">
                       <Bot className="w-4 h-4" />
                    </div>
                    <div className="p-4 bg-white text-slate-700 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}

            {user && (
              <div className="p-3 bg-white border-t border-slate-100 shrink-0">
                <div className="relative flex items-center bg-slate-50 border border-slate-200 rounded-2xl p-1 focus-within:ring-2 focus-within:ring-indigo-100 focus-within:border-indigo-300 transition-all">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="ابحث داخل تفاصيل هذا الدرس..."
                    className="flex-1 bg-transparent border-none focus:ring-0 px-3 py-2 h-[44px] max-h-[120px] resize-none text-sm leading-relaxed"
                    dir="rtl"
                    rows={1}
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center shrink-0 disabled:opacity-50 disabled:bg-slate-300 transition-colors shadow-sm"
                  >
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4 rotate-180" />}
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


