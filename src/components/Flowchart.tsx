/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

interface FlowchartProps {
  steps: string[];
}

export function Flowchart({ steps }: FlowchartProps) {
  return (
    <div className="flex flex-col items-center gap-4 py-8 overflow-x-auto w-full">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`px-6 py-3 rounded-xl border-2 font-mono text-sm shadow-sm transition-colors
              ${index === 0 || index === steps.length - 1 
                ? 'bg-amber-50 border-amber-400 text-amber-900 rounded-full' 
                : 'bg-indigo-50 border-indigo-400 text-indigo-900'
              }`}
          >
            {step}
          </motion.div>
          {index < steps.length - 1 && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 32 }}
              transition={{ delay: index * 0.1 + 0.05 }}
              className="w-0.5 bg-slate-400 relative"
            >
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-r-2 border-b-2 border-slate-400 transform rotate-45" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
