import React, { useState } from 'react';
import { 
  MessageSquare, 
  Database, 
  Send, 
  ChevronRight, 
  RotateCcw, 
  Grid, 
  Paperclip,
  LayoutDashboard,
  ExternalLink,
  Maximize2,
  X,
  User,
  Bot
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DataElfViewProps {
  onBack: () => void;
}

export default function DataElfView({ onBack }: DataElfViewProps) {
  const [input, setInput] = useState('');

  const suggestedQueries = [
    "帮我做一个近一周的收入分析（寄件口径），要包含产品及客户",
    "帮我做一个25年较去年1-9月份对比的利润分析",
    "就近一周而言，本组织的主要质量问题是什么？",
    "双11高峰期间，2025年相比2024年来说，我们的收入表现如何，帮我详细分析一下"
  ];

  const recommendedQuestions = [
    "本组织近7天理赔占收比、经...",
    "本组织近7天各审核结束时二...",
    "本组织近7天各审核结束时一..."
  ];

  return (
    <div className="flex flex-col h-full bg-[#f4f7fc]">
      {/* Top Header/Tab */}
      <div className="flex items-center px-4 py-2 bg-white border-b border-gray-200">
        <div className="flex items-center gap-2">
          <button onClick={onBack} className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
            <X size={18} className="text-gray-500" />
          </button>
          <div className="flex items-center gap-2 px-4 py-2 bg-[#f4f7fc] text-gray-700 rounded-t-xl border-x border-t border-gray-200 text-sm font-medium">
            <span className="truncate max-w-[400px]">本组织近7天理赔占收比、经手损坏理赔占收比、定...</span>
            <ExternalLink size={14} className="text-gray-400" />
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 overflow-y-auto p-8 scrollbar-hide">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Welcome Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative"
          >
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-100">
                  <Database size={20} className="text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">数据小精灵</h2>
              </div>

              <div className="space-y-6">
                <div className="space-y-1">
                  <p className="text-sm text-gray-800 font-medium">Hi，我是您的智能数据伙伴，欢迎随时提问~</p>
                  <p className="text-sm text-gray-600">收入、件量默认是销售口径，若查询寄件口径，请限定</p>
                </div>

                <div className="space-y-3">
                  {suggestedQueries.map((query, index) => (
                    <button 
                      key={index}
                      className="w-full text-left px-5 py-3.5 bg-[#f8faff] hover:bg-blue-50 hover:text-blue-600 border border-gray-100 rounded-xl text-sm text-gray-700 transition-all duration-200"
                    >
                      {query}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-6 border-t border-gray-50 text-[11px] text-gray-400">
                  <User size={12} />
                  <span>如有疑问请联系管理员：01368438-孙豪杰、01370117-刘垚、01378810-路高飞、01380994-许国...</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* User Message Bubble */}
          <div className="flex justify-end">
            <div className="bg-blue-600 text-white px-6 py-3.5 rounded-2xl rounded-tr-none shadow-lg shadow-blue-100 text-sm max-w-[80%] leading-relaxed">
              本组织近7天理赔占收比、经手损坏理赔占收比、定责损坏理赔占收比趋势
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Input Area */}
      <div className="p-6 bg-transparent">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Recommendations */}
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
            <span className="text-xs text-gray-400 whitespace-nowrap">为您推荐如下问题</span>
            {recommendedQuestions.map((q, i) => (
              <button key={i} className="px-4 py-2 bg-white border border-gray-100 rounded-xl text-xs text-gray-600 hover:bg-gray-50 whitespace-nowrap shadow-sm transition-all">
                {q}
              </button>
            ))}
            <div className="flex items-center gap-2 ml-auto">
              <button className="p-2 bg-white border border-gray-100 rounded-xl text-gray-400 hover:text-gray-600 shadow-sm transition-all">
                <Grid size={16} />
              </button>
              <button className="p-2 bg-white border border-gray-100 rounded-xl text-gray-400 hover:text-gray-600 shadow-sm transition-all">
                <RotateCcw size={16} />
              </button>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/10 blur-2xl group-focus-within:bg-blue-500/20 transition-all duration-500 rounded-3xl" />
            <div className="relative bg-white border border-gray-200 rounded-2xl shadow-sm focus-within:border-blue-400 focus-within:ring-[6px] focus-within:ring-blue-500/15 focus-within:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] transition-all duration-500 overflow-hidden">
              <textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="请直接输入您需要分析的数据，如：近一个月的收入相比去年做个详细分析"
                className="w-full p-5 text-sm bg-transparent border-none focus:ring-0 min-h-[100px] resize-none placeholder:text-gray-400"
              />
              
              <div className="flex items-center justify-between px-5 py-4 bg-gray-50/30 border-t border-gray-50">
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-xs text-gray-500 hover:text-blue-600 transition-colors">
                    <div className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center" />
                    上下文理解
                  </button>
                  <button className="flex items-center gap-2 text-xs text-gray-500 hover:text-blue-600 transition-colors">
                    <LayoutDashboard size={14} />
                    快捷提问
                  </button>
                  <button className="flex items-center gap-2 text-xs text-gray-500 hover:text-blue-600 transition-colors">
                    <Database size={14} />
                    智能路由
                  </button>
                  <button className="flex items-center gap-2 text-xs text-gray-500 hover:text-blue-600 transition-colors">
                    <Grid size={14} />
                    更多
                  </button>
                </div>
                
                <button 
                  className={`p-2.5 rounded-xl transition-all ${input.trim() ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-gray-100 text-gray-400'}`}
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
