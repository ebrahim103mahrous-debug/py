/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  FileCode2, 
  Lightbulb, 
  GitBranch,
  Home,
  ListOrdered
} from 'lucide-react';
import { SECTIONS, Section, Lesson, Problem } from './content';
import { Flowchart } from './components/Flowchart';

import { AIAssistant } from './components/AIAssistant';

export default function App() {
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);
  const [view, setView] = useState<'home' | 'lessons' | 'problems'>('home');
  const [activeItem, setActiveItem] = useState<Lesson | Problem | null>(null);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [targetSection, setTargetSection] = useState<Section | null>(null);

  const handleSelectSection = (section: Section) => {
    setTargetSection(section);
    setShowDisclaimer(true);
  };

  const handleConfirmDisclaimer = () => {
    if (targetSection) {
      setSelectedSection(targetSection);
      setView('lessons');
      setShowDisclaimer(false);
      setTargetSection(null);
    }
  };

  const handleGoBack = () => {
    if (activeItem) {
      setActiveItem(null);
    } else if (view !== 'home') {
      setView('home');
      setSelectedSection(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans" dir="rtl">
      {/* Header - Bento Style */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {(selectedSection || activeItem) && (
            <button 
              onClick={handleGoBack}
              className="p-2 bg-slate-100 hover:bg-indigo-50 text-slate-600 rounded-xl transition-all border border-slate-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
          <div>
            <h1 className="text-xl font-extrabold italic uppercase tracking-wider text-indigo-600">
              Python Pro
            </h1>
            <p className="text-[10px] text-slate-600 font-bold uppercase tracking-tight">تعلم البرمجة باحترافية</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-sm">
            {selectedSection ? selectedSection.id.slice(-1) : '1'}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 md:p-8 pb-28">
        <AnimatePresence mode="wait">
          {view === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4"
            >
              {/* Hero Tile */}
              <div className="md:col-span-12 lg:col-span-8 bento-card bg-indigo-50 text-black p-8 md:p-10 flex flex-col justify-center relative overflow-hidden ring-1 ring-indigo-100">
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-black mb-3 leading-tight text-black">ابدأ رحلتك في <br/>عالم بايثون المذهل!</h2>
                  <p className="text-black text-sm md:text-base max-w-md leading-relaxed mb-6 font-medium">
                    تعلم الأساسيات من البداية حتى الاحتراف مع شرح مبسط باللغة العربية وأمثلة عملية.
                  </p>
                  <div className="w-1/3 h-1 bg-indigo-200 rounded-full" />
                </div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl" />
              </div>

              {/* Progress Summary Tile */}
              <div className="md:col-span-12 lg:col-span-4 bento-card p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-700 text-xs uppercase tracking-widest mb-4">التقدم الحالي</h3>
                  <div className="flex items-end justify-between mb-2">
                    <span className="text-4xl font-black text-slate-800">0%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="w-[0%] h-full bg-indigo-600 transition-all duration-1000" />
                  </div>
                </div>
                <p className="text-xs text-slate-600 mt-4 leading-relaxed">أكمل درسك الأول لتبدأ في مراجعة تقدمك!</p>
              </div>

              {/* Section Buttons */}
              {SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleSelectSection(section)}
                  className="md:col-span-6 bento-card p-6 group flex items-start justify-between text-right"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">متاح الآن</span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-800 group-hover:text-indigo-600 transition-colors mb-2">
                      {section.title}
                    </h3>
                    <div className="flex gap-4">
                      <span className="text-xs font-bold text-slate-600 flex items-center gap-1">
                        <BookOpen className="w-3 h-3" /> {section.lessons.length} دروس
                      </span>
                      <span className="text-xs font-bold text-slate-600 flex items-center gap-1">
                        <Play className="w-3 h-3" /> {section.problems.length} مسائل
                      </span>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-indigo-50 transition-colors border border-slate-100">
                    <ChevronLeft className="w-6 h-6 text-slate-600 group-hover:text-indigo-600" />
                  </div>
                </button>
              ))}

              {/* Footer Tile */}
              <div className="md:col-span-12 bento-card bg-slate-100 text-black p-6 flex flex-col md:flex-row items-center justify-between gap-4 border-slate-300">
                <div className="text-center md:text-right">
                  <h4 className="font-bold text-indigo-900">تحتاج مساعدة؟</h4>
                  <p className="text-xs text-slate-800">تواصل مع مدرسي اللغة في أي وقت!</p>
                </div>
                <button className="px-6 py-2 bg-indigo-200 hover:bg-indigo-300 rounded-xl text-xs font-bold transition-all shadow-lg text-black">
                  تواصل معنا
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="content-list"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className={activeItem ? "max-w-4xl mx-auto" : "space-y-6"}
            >
              {/* Context Header */}
              {!activeItem && (
                <div className="bento-card p-6 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
                   <div className="relative z-10 text-center md:text-right">
                    <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest block mb-2">{selectedSection?.id}</span>
                    <h2 className="text-2xl font-black text-slate-800">{selectedSection?.title}</h2>
                    <p className="text-slate-600 text-sm mt-1">اختر محتوى لبدء التعلم الآن</p>
                  </div>
                  
                  {/* Tabs - Bento Style */}
                  <div className="relative z-10 flex bg-slate-100 p-1 rounded-2xl w-full md:w-auto shadow-inner border border-slate-200">
                    <button
                      onClick={() => setView('lessons')}
                      className={`flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold transition-all ${view === 'lessons' ? 'bg-white shadow-md text-indigo-600' : 'text-slate-500 hover:text-indigo-400'}`}
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>الدروس</span>
                    </button>
                    <button
                      onClick={() => setView('problems')}
                      className={`flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold transition-all ${view === 'problems' ? 'bg-white shadow-md text-indigo-600' : 'text-slate-500 hover:text-indigo-400'}`}
                    >
                      <Play className="w-4 h-4" />
                      <span>المسائل</span>
                    </button>
                  </div>
                  <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-indigo-50 to-transparent opacity-50" />
                </div>
              )}

              {activeItem ? (
                <DetailView 
                  item={activeItem} 
                  onClose={() => setActiveItem(null)} 
                />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {view === 'lessons' ? (
                    selectedSection?.lessons.map((lesson, idx) => (
                      <Card 
                        key={lesson.id} 
                        index={idx + 1}
                        title={lesson.titleAr} 
                        subtitle={lesson.titleEn}
                        icon={<BookOpen className="w-5 h-5" />}
                        onClick={() => setActiveItem(lesson)}
                      />
                    ))
                  ) : (
                    selectedSection?.problems.map((problem, idx) => (
                      <Card 
                        key={problem.id} 
                        index={idx + 1}
                        title={problem.titleAr} 
                        subtitle={problem.titleEn}
                        icon={<FileCode2 className="w-5 h-5" />}
                        onClick={() => setActiveItem(problem)}
                      />
                    ))
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Nav Bar - Floating Bento */}
      <nav className="fixed bottom-6 left-6 right-6 flex items-center justify-center pointer-events-none z-50">
        <div className="bg-white/95 backdrop-blur-xl border border-slate-300 p-2 rounded-3xl shadow-2xl flex gap-1 pointer-events-auto max-w-sm w-full transition-all">
          <button 
            onClick={() => { setView('home'); setSelectedSection(null); setActiveItem(null); }}
            className={`flex-1 flex flex-col items-center gap-1 py-3 rounded-2xl transition-all ${view === 'home' ? 'bg-indigo-200 text-black shadow-lg font-bold' : 'text-slate-800 hover:bg-slate-100 font-bold'}`}
          >
            <Home className="w-5 h-5" />
            <span className="text-[10px] font-bold">الرئيسية</span>
          </button>
          <button 
            onClick={() => { if(selectedSection) setView('lessons'); setActiveItem(null); }}
            className={`flex-1 flex flex-col items-center gap-1 py-3 rounded-2xl transition-all ${view === 'lessons' ? 'bg-indigo-200 text-black shadow-lg font-bold' : 'text-slate-800 hover:bg-slate-100 font-bold'} ${!selectedSection ? 'opacity-20 translate-y-1' : ''}`}
            disabled={!selectedSection}
          >
            <BookOpen className="w-5 h-5" />
            <span className="text-[10px] font-bold">الدروس</span>
          </button>
          <button 
            onClick={() => { if(selectedSection) setView('problems'); setActiveItem(null); }}
            className={`flex-1 flex flex-col items-center gap-1 py-3 rounded-2xl transition-all ${view === 'problems' ? 'bg-indigo-200 text-black shadow-lg font-bold' : 'text-slate-800 hover:bg-slate-100 font-bold'} ${!selectedSection ? 'opacity-20 translate-y-1' : ''}`}
            disabled={!selectedSection}
          >
            <Play className="w-5 h-5" />
            <span className="text-[10px] font-bold">المسائل</span>
          </button>
        </div>
      </nav>

      {/* Disclaimer Modal */}
      <AnimatePresence>
        {showDisclaimer && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-10 max-w-lg w-full shadow-2xl border border-indigo-100 flex flex-col gap-6"
            >
              <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center border border-amber-100">
                <Lightbulb className="w-8 h-8" />
              </div>
              
              <div>
                <h3 className="text-2xl font-black text-slate-800 mb-3">تنبيه وإخلاء مسؤولية</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  هذا المحتوى تم تصميمه بغرض المساعدة التعليمية فقط. 
                  <br /><br />
                  يرجى ملاحظة أن الشرح قد يكون ناقصاً في بعض الأجزاء، وقد توجد أخطاء لغوية أو برمجية غير مقصودة، أو مسائل هامة لم يتم إدراجها هنا. 
                  نحن ننصح دائماً بمراجعة المراجع الرسمية والمصادر المعتمدة لضمان الدقة الكاملة.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <button 
                  onClick={handleConfirmDisclaimer}
                  className="w-full py-5 bg-indigo-600 text-white font-black rounded-3xl hover:bg-indigo-700 transition-all shadow-lg text-lg flex items-center justify-center gap-2"
                >
                  <span>فهمت وموافق</span>
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => { setShowDisclaimer(false); setTargetSection(null); }}
                  className="w-full py-4 bg-slate-50 text-slate-500 font-bold rounded-2xl hover:bg-slate-100 transition-all text-sm"
                >
                  إلغاء
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface CardProps {
  index: number;
  title: string;
  subtitle: string;
  icon: ReactNode;
  onClick: () => void;
  key?: string | number;
}

function Card({ title, subtitle, icon, onClick, index }: CardProps) {
  return (
    <button
      onClick={onClick}
      className="bento-card p-6 flex flex-col justify-between text-right group h-full text-start items-start"
    >
      <div className="flex justify-between items-start w-full mb-4">
        <div className="w-10 h-10 bg-slate-50 text-slate-800 rounded-xl flex items-center justify-center font-mono font-bold border border-slate-100 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-500 transition-all">
          {index < 10 ? `0${index}` : index}
        </div>
        <div className="text-slate-600 group-hover:text-indigo-600 transition-all transform group-hover:-translate-y-1">
          {icon}
        </div>
      </div>
      <div>
        <h4 className="text-lg font-black text-slate-800 transition-colors">{title}</h4>
        <span className="text-[10px] text-slate-600 font-mono uppercase tracking-widest">{subtitle}</span>
      </div>
    </button>
  );
}

function DetailView({ item, onClose }: { item: Lesson | Problem; onClose: () => void }) {
  const isProblem = 'flowchartData' in item;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-6"
    >
      {/* Header Bento Tile */}
      <div className="bento-card p-8 bg-indigo-50 text-black relative border-indigo-200 shadow-md">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-900 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-200">
              {isProblem ? 'تحدي برمجي' : 'دليل دراسي'}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-1 text-black">{item.titleAr}</h2>
          <p className="text-slate-700 font-mono text-sm tracking-loose uppercase font-bold">{(item as Lesson).titleEn}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Main Content Tile */}
        <div className={`col-span-12 ${isProblem ? 'lg:col-span-12' : 'lg:col-span-12'} bento-card p-8`}>
          <div className="prose prose-slate max-w-none">
            {isProblem ? (
              <div className="space-y-10">
                {/* Problem Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-100">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                      <span className="text-[10px] uppercase font-bold text-emerald-700">نص المسألة</span>
                    </div>
                    <p className="text-slate-900 font-bold leading-relaxed">{(item as Problem).descriptionAr}</p>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-2 mb-3 text-right" dir="rtl">
                       <span className="text-[10px] uppercase font-bold text-slate-600">English Prompt</span>
                    </div>
                    <p className="text-slate-700 italic text-sm leading-relaxed" dir="ltr">{(item as Problem).descriptionEn}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-black text-slate-800 mb-4 flex items-center gap-2">
                    <Lightbulb className="w-6 h-6 text-indigo-500" /> الشرح بـالتفصيل الممل
                  </h3>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-slate-600 leading-relaxed whitespace-pre-wrap">
                    {(item as Problem).explanation}
                  </div>
                </div>

                {item.algorithmAr && (
                  <div className="bento-card p-6 bg-slate-50 border border-slate-200 mt-4">
                    <h3 className="text-xl font-black text-slate-800 mb-4 flex items-center gap-2">
                       <ListOrdered className="w-6 h-6 text-indigo-500" /> خوارزمية الحل (Algorithm)
                    </h3>
                    <div className="text-slate-700 leading-relaxed whitespace-pre-wrap font-bold text-sm rtl" dir="rtl">
                      {item.algorithmAr}
                    </div>
                  </div>
                )}

                {/* Flowchart Tile Inside */}
                <div className="bento-card p-6 bg-white overflow-hidden border-indigo-100 bg-indigo-50/20">
                  <h3 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-2">
                    <GitBranch className="w-6 h-6 text-indigo-600" /> خريطة التدفق المنطقي
                  </h3>
                  <div className="flex justify-center bg-white rounded-3xl border border-indigo-100 p-4 shadow-inner">
                    <Flowchart steps={(item as Problem).flowchartData.split(' -> ')} />
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <h3 className="text-xl font-black text-slate-800 mb-4">محتوى الدرس</h3>
                <div className="text-lg text-slate-600 leading-loose whitespace-pre-wrap">
                  {(item as Lesson).content}
                </div>
                {item.algorithmAr && (
                  <div className="bento-card p-6 bg-slate-50 border border-slate-200 mt-4">
                    <h3 className="text-xl font-black text-slate-800 mb-4 flex items-center gap-2">
                       <ListOrdered className="w-6 h-6 text-indigo-500" /> الخطوات المنطقية (Algorithm)
                    </h3>
                    <div className="text-slate-700 leading-relaxed whitespace-pre-wrap font-bold text-sm rtl" dir="rtl">
                      {item.algorithmAr}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Code Tile */}
        {item.code && (
          <div className="col-span-12 space-y-6">
            <div className="bento-card bg-slate-50 overflow-hidden shadow-inner relative">
               <div className="flex justify-between items-center bg-slate-100 px-6 py-4 border-b border-slate-200">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-800 uppercase tracking-widest flex items-center gap-2">
                   <FileCode2 className="w-3 h-3" /> solution.py
                </span>
              </div>
              <div className="p-8 font-mono text-sm md:text-base text-black overflow-x-auto leading-relaxed ltr" dir="ltr">
                <pre><code>{item.code}</code></pre>
              </div>
            </div>

            {/* Step-by-step table */}
            {item.lineByLineAr && (
              <div className="bento-card overflow-hidden border-slate-200">
                <div className="bg-slate-100 px-6 py-3 border-b border-slate-200">
                  <h4 className="text-sm font-black text-slate-800">شرح الكود سطر بسطر</h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-right">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="px-6 py-3 text-xs font-black text-slate-500 uppercase tracking-wider">السطر</th>
                        <th className="px-6 py-3 text-xs font-black text-slate-500 uppercase tracking-wider">الشرح بالعربية</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {item.lineByLineAr.map((expl, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 font-mono text-xs text-indigo-600 bg-slate-50/50 ltr text-left" dir="ltr">
                            <code>{expl.line}</code>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-700 leading-relaxed">
                            {expl.explanation}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex gap-4 mb-20">
         <button
          onClick={onClose}
          className="flex-1 py-5 bg-white border border-slate-300 text-slate-700 hover:text-slate-900 hover:border-slate-500 font-black rounded-3xl transition-all shadow-sm"
        >
          تم، عد للقائمة
        </button>
        <button
          onClick={onClose}
          className="flex-[2] py-5 bg-indigo-200 text-black font-black rounded-3xl hover:bg-indigo-300 transition-all shadow-md"
        >
          انتقل للتالي
        </button>
      </div>
      
      <AIAssistant context={JSON.stringify(item)} />
    </motion.div>
  );
}
