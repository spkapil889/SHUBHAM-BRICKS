import { useState, useEffect } from 'react';
import { Calculator, Info, AlertTriangle, RefreshCw, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function BricksCalculator() {
  const [wallLength, setWallLength] = useState<number>(10);
  const [wallHeight, setWallHeight] = useState<number>(10);
  const [wallThickness, setWallThickness] = useState<number>(9); // 4.5 or 9 inches
  const [brickType, setBrickType] = useState<string>('standard');
  const [mortarGap, setMortarGap] = useState<number>(0.5); // inches
  const [wastage, setWastage] = useState<number>(5); // percentage
  const [result, setResult] = useState<{
    totalBricks: number;
    wastageBricks: number;
    finalQuantity: number;
  } | null>(null);

  const brickSizes: Record<string, { l: number; w: number; h: number }> = {
    standard: { l: 9, w: 4.5, h: 3 },
    modular: { l: 7.5, w: 3.5, h: 3.5 },
    flyash: { l: 9, w: 4, h: 3 },
  };

  const calculateBricks = () => {
    const brick = brickSizes[brickType];
    
    // Convert wall dimensions to inches
    const wallL = wallLength * 12;
    const wallH = wallHeight * 12;
    const wallT = wallThickness;

    // Wall volume in cubic inches
    const wallVolume = wallL * wallH * wallT;

    // Brick volume with mortar in cubic inches
    const brickLWithMortar = brick.l + mortarGap;
    const brickWWithMortar = brick.w + mortarGap;
    const brickHWithMortar = brick.h + mortarGap;
    
    // Note: Thickness of brick depends on wall thickness (4.5" wall is single layer, 9" is double)
    // Simplified volume calculation
    const brickVolumeWithMortar = brickLWithMortar * brickWWithMortar * brickHWithMortar;

    // Number of bricks
    const totalBricks = Math.ceil(wallVolume / brickVolumeWithMortar);
    const wastageBricks = Math.ceil(totalBricks * (wastage / 100));
    const finalQuantity = totalBricks + wastageBricks;

    setResult({
      totalBricks,
      wastageBricks,
      finalQuantity
    });
  };

  useEffect(() => {
    calculateBricks();
  }, [wallLength, wallHeight, wallThickness, brickType, mortarGap, wastage]);

  const resetCalculator = () => {
    setWallLength(10);
    setWallHeight(10);
    setWallThickness(9);
    setBrickType('standard');
    setMortarGap(0.5);
    setWastage(5);
  };

  return (
    <div className="pt-24 pb-24">
      {/* Banner */}
      <section className="bg-brand-charcoal py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1590069230002-70cc83815b41?q=80&w=2000&auto=format&fit=crop" 
            alt="Bricks" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Bricks Calculator</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Estimate the exact number of bricks required for your construction project with our professional estimation tool.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red">
                  <Calculator size={24} />
                </div>
                <h2 className="text-2xl font-bold text-brand-charcoal">Wall Dimensions</h2>
              </div>
              <button 
                onClick={resetCalculator}
                className="text-gray-400 hover:text-brand-red flex items-center gap-2 text-sm font-bold transition-colors"
              >
                <RefreshCw size={16} /> Reset
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Wall Length (Feet)</label>
                  <input 
                    type="number" 
                    value={wallLength}
                    onChange={(e) => setWallLength(Number(e.target.value))}
                    className="w-full h-14 px-4 bg-brand-grey border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all font-bold text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Wall Height (Feet)</label>
                  <input 
                    type="number" 
                    value={wallHeight}
                    onChange={(e) => setWallHeight(Number(e.target.value))}
                    className="w-full h-14 px-4 bg-brand-grey border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all font-bold text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Wall Thickness (Inches)</label>
                  <select 
                    value={wallThickness}
                    onChange={(e) => setWallThickness(Number(e.target.value))}
                    className="w-full h-14 px-4 bg-brand-grey border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all font-bold text-lg appearance-none"
                  >
                    <option value={4.5}>4.5" (Single Layer)</option>
                    <option value={9}>9" (Double Layer)</option>
                    <option value={13.5}>13.5" (Triple Layer)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Brick Type</label>
                  <select 
                    value={brickType}
                    onChange={(e) => setBrickType(e.target.value)}
                    className="w-full h-14 px-4 bg-brand-grey border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all font-bold text-lg appearance-none"
                  >
                    <option value="standard">Standard Red Clay (9"x4.5"x3")</option>
                    <option value="modular">Modular Brick (7.5"x3.5"x3.5")</option>
                    <option value="flyash">Fly Ash Brick (9"x4"x3")</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Mortar Gap (Inches)</label>
                  <input 
                    type="number" 
                    step="0.1"
                    value={mortarGap}
                    onChange={(e) => setMortarGap(Number(e.target.value))}
                    className="w-full h-14 px-4 bg-brand-grey border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all font-bold text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Wastage (%)</label>
                  <input 
                    type="number" 
                    value={wastage}
                    onChange={(e) => setWastage(Number(e.target.value))}
                    className="w-full h-14 px-4 bg-brand-grey border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all font-bold text-lg"
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-blue-50 rounded-2xl flex items-start gap-4 border border-blue-100">
              <Info className="text-blue-600 shrink-0 mt-1" size={20} />
              <p className="text-blue-800 text-sm leading-relaxed">
                <strong>Note:</strong> This is an approximate estimation based on standard calculations. Final quantity may vary depending on actual site conditions, mortar mix ratio, and breakage during handling. We recommend adding a 5-10% buffer for wastage.
              </p>
            </div>
          </div>

          {/* Results Card */}
          <div className="space-y-8">
            <motion.div 
              key={result?.finalQuantity}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-brand-red rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-xl font-bold mb-8 uppercase tracking-widest opacity-80">Estimation Result</h3>
              
              <div className="space-y-8">
                <div>
                  <div className="text-sm font-medium opacity-70 mb-1">Total Bricks Required</div>
                  <div className="text-5xl font-bold">{result?.totalBricks.toLocaleString()}</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/20">
                  <div>
                    <div className="text-xs font-medium opacity-70 mb-1">Wastage ({wastage}%)</div>
                    <div className="text-xl font-bold">+{result?.wastageBricks.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-xs font-medium opacity-70 mb-1">Total Order Qty</div>
                    <div className="text-xl font-bold">{result?.finalQuantity.toLocaleString()}</div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/20">
                <Link to="/contact" className="w-full bg-white text-brand-red py-4 rounded-xl font-bold text-center flex items-center justify-center gap-2 hover:bg-brand-charcoal hover:text-white transition-all">
                  Get a Custom Quote <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg space-y-6">
              <h4 className="font-bold text-brand-charcoal flex items-center gap-2">
                <AlertTriangle size={18} className="text-brand-red" /> Why Estimate Properly?
              </h4>
              <ul className="space-y-4">
                {[
                  'Avoid multiple delivery costs',
                  'Ensure uniform quality from same batch',
                  'Optimize construction schedule',
                  'Reduce material wastage on site'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to use */}
      <section className="py-24 bg-brand-offwhite mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-brand-charcoal">How to Use the Calculator</h2>
            <p className="text-gray-600">Follow these simple steps to get an accurate estimate for your project.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Measure Wall Area',
                desc: 'Measure the length and height of the wall in feet. Subtract areas for windows and doors for better accuracy.'
              },
              {
                title: 'Select Wall Thickness',
                desc: 'Choose 4.5" for partition walls or 9" for main load-bearing walls.'
              },
              {
                title: 'Choose Brick Type',
                desc: 'Different bricks have different dimensions. Select the type you intend to use for your construction.'
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {idx + 1}
                </div>
                <h4 className="text-xl font-bold mb-4 text-brand-charcoal">{step.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-brand-charcoal mb-6">Need a More Accurate Estimate?</h2>
          <p className="text-gray-600 text-lg mb-10">
            Our experts can help you with a detailed material take-off for your entire project. Get in touch for a professional consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">Connect with Our Team</Link>
            <a href="https://wa.me/919876543210" className="btn-secondary flex items-center gap-2">
              <MessageSquare size={20} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
