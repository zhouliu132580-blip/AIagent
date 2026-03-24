import React, { useState } from 'react';
import { 
  Type, 
  CreditCard, 
  BarChart3, 
  Table as TableIcon, 
  Image as ImageIcon, 
  Anchor, 
  Columns, 
  Square, 
  Grid, 
  HelpCircle, 
  Eye, 
  Save, 
  Send, 
  ChevronDown, 
  Pencil,
  Settings2,
  Maximize2,
  X
} from 'lucide-react';
import { motion } from 'motion/react';

interface SmartBuildViewProps {
  onBack: () => void;
}

export default function SmartBuildView({ onBack }: SmartBuildViewProps) {
  const [canvasWidth, setCanvasWidth] = useState('1280px');
  const [theme, setTheme] = useState('默认主题');
  const [showGrid, setShowGrid] = useState(true);

  const toolbarItems = [
    { icon: Type, label: '文本' },
    { icon: CreditCard, label: '指标卡' },
    { icon: BarChart3, label: '图表' },
    { icon: TableIcon, label: '表格' },
    { icon: ImageIcon, label: '图片' },
    { icon: Anchor, label: '锚点导航' },
    { icon: Columns, label: 'Tab' },
    { icon: Square, label: '形状' },
  ];

  return (
    <div className="flex flex-col h-full bg-[#f0f2f5] overflow-hidden select-none">
      {/* Top Header */}
      <header className="h-12 bg-white border-b border-gray-200 flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-1 hover:bg-gray-100 rounded transition-colors mr-1">
            <X size={16} className="text-gray-500" />
          </button>
          <span className="text-sm font-bold text-gray-800">AI生成报告</span>
          <Pencil size={12} className="text-blue-500 cursor-pointer" />
          <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] rounded border border-blue-100">综合</span>
          <span className="px-2 py-0.5 bg-orange-50 text-orange-600 text-[10px] rounded border border-orange-100">草稿中</span>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-gray-400">
          <span>快人一步:</span>
          <span className="px-1.5 py-0.5 bg-gray-100 rounded text-gray-600 font-mono">Ctrl</span>
          <span>+</span>
          <span className="px-1.5 py-0.5 bg-gray-100 rounded text-gray-600 font-mono">G</span>
          <span>可快速开启/关闭网格</span>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 text-xs text-gray-600 hover:text-blue-600">
            <HelpCircle size={14} />
            帮助中心
          </button>
          <div className="h-4 w-[1px] bg-gray-200" />
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 border border-blue-600 text-blue-600 rounded text-xs hover:bg-blue-50 transition-colors">预览</button>
            <button className="px-3 py-1.5 border border-blue-600 text-blue-600 rounded text-xs hover:bg-blue-50 transition-colors">保存草稿</button>
            <button className="px-4 py-1.5 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 transition-colors flex items-center gap-1.5 shadow-sm">
              <Send size={12} />
              发布
            </button>
          </div>
        </div>
      </header>

      {/* Toolbar */}
      <div className="h-10 bg-white border-b border-gray-200 flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-1">
          {toolbarItems.map((item, idx) => (
            <button key={idx} className="flex items-center gap-1.5 px-3 py-1 hover:bg-gray-50 rounded text-gray-600 transition-colors group">
              <item.icon size={14} className="text-blue-600" />
              <span className="text-xs">{item.label}</span>
              <ChevronDown size={10} className="text-gray-300 group-hover:text-gray-400" />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 border-r border-gray-200 pr-3">
            <button className="p-1.5 hover:bg-gray-50 rounded text-gray-400"><Grid size={14} /></button>
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map(i => (
              <button key={i} className="p-1.5 hover:bg-gray-50 rounded text-gray-400">
                <div className="w-3 h-3 border border-current opacity-50" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Canvas Area */}
        <div className="flex-1 relative overflow-auto bg-[#f0f2f5] flex justify-center p-8 scrollbar-hide">
          <div 
            className={`bg-white shadow-sm relative transition-all duration-300 ${showGrid ? 'bg-grid-slate-100' : ''}`}
            style={{ 
              width: canvasWidth, 
              minHeight: '1000px',
              backgroundImage: showGrid ? 'radial-gradient(#e5e7eb 1px, transparent 0)' : 'none',
              backgroundSize: '20px 20px'
            }}
          >
            {/* Empty State */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <div className="w-32 h-32 opacity-10 mb-4">
                <ImageIcon size={128} className="text-gray-400" />
              </div>
              <p className="text-gray-400 text-sm">请从顶部点击组件或拖拽组件搭建</p>
              
              <div className="mt-8 pointer-events-auto">
                <div className="bg-blue-50/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-4 flex items-center gap-4 shadow-lg shadow-blue-500/5">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Bot size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">快来试试 <span className="text-blue-600">AI生成报告</span></p>
                    <p className="text-[10px] text-gray-500">当前仅支持新建报告使用~</p>
                  </div>
                  <button className="ml-4 px-4 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-medium hover:bg-blue-700 transition-colors">
                    立即尝试
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-64 bg-white border-l border-gray-200 flex flex-col shrink-0">
          <div className="p-4 space-y-8">
            {/* Canvas Settings */}
            <section className="space-y-4">
              <h3 className="text-xs font-bold text-gray-800 flex items-center gap-2">
                画布设置
              </h3>
              <div className="space-y-2">
                <p className="text-[11px] text-gray-500">画布宽度</p>
                {[
                  { label: '超小屏幕 (1024px)', value: '1024px' },
                  { label: '小屏幕 (1280px)', value: '1280px' },
                  { label: '大屏幕 (1536px)', value: '1536px' },
                  { label: '超大屏幕 (1920px)', value: '1920px' },
                ].map((opt) => (
                  <label key={opt.value} className="flex items-center gap-2 cursor-pointer group">
                    <div 
                      onClick={() => setCanvasWidth(opt.value)}
                      className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-all ${canvasWidth === opt.value ? 'border-blue-600' : 'border-gray-300 group-hover:border-blue-400'}`}
                    >
                      {canvasWidth === opt.value && <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                    </div>
                    <span className={`text-[11px] ${canvasWidth === opt.value ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>{opt.label}</span>
                  </label>
                ))}
              </div>
            </section>

            <div className="h-[1px] bg-gray-100" />

            {/* Theme Settings */}
            <section className="space-y-4">
              <h3 className="text-xs font-bold text-gray-800">主题设置</h3>
              <div className="space-y-2">
                <p className="text-[11px] text-gray-500">主题</p>
                {['默认主题', '科技简约', '活力缤纷'].map((t) => (
                  <label key={t} className="flex items-center gap-2 cursor-pointer group">
                    <div 
                      onClick={() => setTheme(t)}
                      className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-all ${theme === t ? 'border-blue-600' : 'border-gray-300 group-hover:border-blue-400'}`}
                    >
                      {theme === t && <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                    </div>
                    <span className={`text-[11px] ${theme === t ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>{t}</span>
                  </label>
                ))}
              </div>
            </section>

            <div className="h-[1px] bg-gray-100" />

            {/* Grid Toggle */}
            <section className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-gray-800">网格</h3>
              <button 
                onClick={() => setShowGrid(!showGrid)}
                className={`w-8 h-4 rounded-full relative transition-colors ${showGrid ? 'bg-blue-600' : 'bg-gray-200'}`}
              >
                <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${showGrid ? 'left-4.5' : 'left-0.5'}`} />
              </button>
            </section>
          </div>

          <div className="mt-auto border-t border-gray-100 p-4 flex items-center justify-center">
             <div className="[writing-mode:vertical-rl] text-[10px] font-bold text-gray-400 tracking-widest py-4">
               属性配置
             </div>
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <footer className="h-8 bg-white border-t border-gray-200 flex items-center justify-between px-4 shrink-0 text-[10px] text-gray-500">
        <div>当前画布: {canvasWidth}</div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span>100%</span>
            <div className="w-32 h-1 bg-gray-100 rounded-full relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-600 rounded-full shadow-sm" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Bot({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}
