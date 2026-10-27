/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  UtensilsCrossed, 
  Calculator, 
  CalendarDays, 
  Plus, 
  Minus, 
  ShoppingBag, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  PhoneCall,
  Clock,
  Users
} from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
}

export function InteractivePhoneMockup() {
  const [activeTab, setActiveTab] = useState<'menu' | 'calc' | 'reserve'>('menu');
  
  // Menu Tab State
  const menuItems = [
    { id: '1', name: 'Margherita Pizza', price: 18, desc: 'San Marzano tomatoes, buffalo mozzarella, fresh basil', tag: 'Chef Choice' },
    { id: '2', name: 'Truffle Tagliatelle', price: 24, desc: 'Fresh egg pasta, black summer truffle, parmigiano', tag: 'Popular' },
    { id: '3', name: 'Classic Tiramisu', price: 12, desc: 'Espresso-soaked ladyfingers, velvety mascarpone', tag: 'Dessert' }
  ];

  const [cart, setCart] = useState<CartItem[]>([
    { id: '1', name: 'Margherita Pizza', price: 18, qty: 1 }
  ]);
  const [showCartDrawer, setShowCartDrawer] = useState(false);

  const addToCart = (item: typeof menuItems[0]) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, qty: 1 }];
    });
    setShowCartDrawer(true);
  };

  const updateQty = (id: string, delta: number) => {
    setCart(prev => prev.map(i => {
      if (i.id === id) {
        const newQty = i.qty + delta;
        return newQty > 0 ? { ...i, qty: newQty } : null;
      }
      return i;
    }).filter(Boolean) as CartItem[]);
  };

  const cartTotal = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
  const cartItemCount = cart.reduce((acc, i) => acc + i.qty, 0);

  // Savings Calc Tab State
  const [orderAmount, setOrderAmount] = useState<number>(50);
  const doorDashFee = Math.round(orderAmount * 0.30);
  const restaurantKeeps = orderAmount - doorDashFee;
  const ridgeTakes = 0;
  const annualSaved = Math.round((orderAmount * 0.30) * 120); // 120 orders/month estimate

  // Reserve Tab State
  const [partySize, setPartySize] = useState('2 Guests');
  const [reserveTime, setReserveTime] = useState('7:00 PM');
  const [reserveDate, setReserveDate] = useState('Today');
  const [reservationConfirmed, setReservationConfirmed] = useState(false);

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    setReservationConfirmed(true);
    setTimeout(() => {
      setReservationConfirmed(false);
    }, 4500);
  };

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[360px] mx-auto select-none">
      
      {/* Decorative Outer Glow */}
      <div 
        className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 via-emerald-400/10 to-amber-500/15 rounded-[44px] blur-xl opacity-80" 
        aria-hidden="true" 
      />

      {/* Phone Hardware Chassis */}
      <div className="relative bg-[#0d131f] border-[6px] border-slate-700/80 rounded-[42px] p-2.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden">
        
        {/* Notch / Dynamic Island */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-full z-30 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-800 mr-2" />
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
        </div>

        {/* Screen Bezel */}
        <div className="relative bg-[#faf8f5] text-stone-900 rounded-[32px] pt-8 pb-4 px-3.5 h-[530px] flex flex-col justify-between overflow-hidden shadow-inner">
          
          {/* Top Mini Brand Bar */}
          <div className="border-b border-stone-200 pb-2 mb-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="font-outfit font-extrabold text-xs text-stone-900 tracking-tight">
                THE LOCAL TABLE
              </span>
            </div>
            <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
              0% Commission
            </span>
          </div>

          {/* Interactive Tab Switcher */}
          <div className="grid grid-cols-3 gap-1 bg-stone-200/80 p-1 rounded-xl mb-3 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('menu')}
              className={`py-1.5 px-2 rounded-lg flex items-center justify-center gap-1 transition-all ${
                activeTab === 'menu' 
                  ? 'bg-white text-stone-950 shadow-sm' 
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <UtensilsCrossed className="w-3 h-3 text-emerald-600" />
              <span>Menu</span>
            </button>

            <button
              onClick={() => setActiveTab('calc')}
              className={`py-1.5 px-2 rounded-lg flex items-center justify-center gap-1 transition-all ${
                activeTab === 'calc' 
                  ? 'bg-white text-stone-950 shadow-sm' 
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Calculator className="w-3 h-3 text-amber-600" />
              <span>Savings</span>
            </button>

            <button
              onClick={() => setActiveTab('reserve')}
              className={`py-1.5 px-2 rounded-lg flex items-center justify-center gap-1 transition-all ${
                activeTab === 'reserve' 
                  ? 'bg-white text-stone-950 shadow-sm' 
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <CalendarDays className="w-3 h-3 text-emerald-600" />
              <span>Reserve</span>
            </button>
          </div>

          {/* Tab 1: Menu & Live Cart */}
          {activeTab === 'menu' && (
            <div className="flex-1 overflow-y-auto space-y-2 pr-0.5 relative text-left">
              <div className="flex items-center justify-between text-[11px] text-stone-500 pb-1">
                <span>Featured Creations</span>
                <span className="text-emerald-700 font-medium">Direct Kitchen Order</span>
              </div>

              {menuItems.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white border border-stone-200 rounded-xl p-2.5 shadow-sm hover:border-emerald-300 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-outfit font-bold text-xs text-stone-900">
                          {item.name}
                        </h4>
                        <span className="text-[9px] bg-stone-100 text-stone-600 px-1.5 py-0.2 rounded font-medium">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-[10px] text-stone-500 leading-tight mt-0.5 line-clamp-1">
                        {item.desc}
                      </p>
                    </div>

                    <div className="flex flex-col items-end shrink-0">
                      <span className="font-bold text-xs text-stone-900 font-mono">
                        ${item.price}
                      </span>
                      <button
                        onClick={() => addToCart(item)}
                        className="mt-1 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-xs transition"
                      >
                        <Plus className="w-2.5 h-2.5" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Cart Drawer Bar */}
              <div className="mt-3 bg-stone-900 text-white rounded-xl p-2.5 shadow-md flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">
                    <ShoppingBag className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold leading-tight">
                      {cartItemCount} {cartItemCount === 1 ? 'item' : 'items'} in Bag
                    </div>
                    <div className="text-[10px] text-emerald-400 font-mono font-bold leading-tight">
                      Total: ${cartTotal} (0% DoorDash Fee)
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setShowCartDrawer(!showCartDrawer)}
                  className="bg-emerald-500 hover:bg-emerald-400 text-stone-950 text-[11px] font-bold px-2.5 py-1 rounded-lg transition"
                >
                  {showCartDrawer ? 'Close' : 'View Bag'}
                </button>
              </div>

              {/* Slide-over cart breakdown */}
              {showCartDrawer && (
                <div className="absolute inset-x-0 bottom-0 top-12 bg-white/95 backdrop-blur-md rounded-2xl border border-stone-200 p-3 shadow-xl z-20 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-stone-200 pb-1.5 mb-2">
                      <span className="font-outfit font-bold text-xs text-stone-900">Your Direct Bag</span>
                      <button 
                        onClick={() => setShowCartDrawer(false)}
                        className="text-stone-400 hover:text-stone-700 text-xs font-bold"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="space-y-1.5 max-h-44 overflow-y-auto pr-1">
                      {cart.map(item => (
                        <div key={item.id} className="flex items-center justify-between text-xs py-1 border-b border-stone-100">
                          <div>
                            <div className="font-medium text-stone-900 text-[11px]">{item.name}</div>
                            <div className="text-[10px] text-stone-500 font-mono">${item.price} each</div>
                          </div>
                          <div className="flex items-center gap-1.5 bg-stone-100 rounded-lg p-0.5">
                            <button 
                              onClick={() => updateQty(item.id, -1)}
                              className="w-5 h-5 flex items-center justify-center text-stone-600 hover:bg-white rounded"
                            >
                              <Minus className="w-2.5 h-2.5" />
                            </button>
                            <span className="font-mono text-xs font-bold px-1">{item.qty}</span>
                            <button 
                              onClick={() => updateQty(item.id, 1)}
                              className="w-5 h-5 flex items-center justify-center text-stone-600 hover:bg-white rounded"
                            >
                              <Plus className="w-2.5 h-2.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-stone-200">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-stone-600">Subtotal:</span>
                      <span className="font-bold font-mono text-stone-900">${cartTotal}</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-emerald-700 font-medium mb-2">
                      <span>Third-party fee:</span>
                      <span className="font-bold">$0.00</span>
                    </div>
                    <button 
                      onClick={() => alert("Mockup Demo: On your live custom site, customers pay directly to your Stripe/Square with $0 commission!")}
                      className="w-full bg-[#10b981] hover:bg-[#0da371] text-stone-950 font-bold text-xs py-2 rounded-xl text-center shadow-sm"
                    >
                      Checkout (Keep 100%)
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Savings Calculator */}
          {activeTab === 'calc' && (
            <div className="flex-1 overflow-y-auto space-y-3 text-left">
              <div>
                <label className="text-[11px] font-bold text-stone-700 block mb-1">
                  Average Order Amount:
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-stone-500 font-mono">$</span>
                  <input
                    type="range"
                    min="20"
                    max="200"
                    step="5"
                    value={orderAmount}
                    onChange={(e) => setOrderAmount(Number(e.target.value))}
                    className="w-full accent-emerald-600 h-1.5 bg-stone-200 rounded-lg cursor-pointer"
                  />
                  <span className="font-outfit font-extrabold text-sm text-stone-900 font-mono min-w-10 text-right">
                    ${orderAmount}
                  </span>
                </div>
              </div>

              {/* Fee Comparison Cards */}
              <div className="space-y-2">
                <div className="bg-red-50/80 border border-red-200 rounded-xl p-2.5 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-red-700">DoorDash Fee (30%)</div>
                    <div className="text-xs text-stone-600">DoorDash takes:</div>
                  </div>
                  <div className="font-outfit font-extrabold text-base text-red-600 font-mono">
                    -${doorDashFee}
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-2.5 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">Ridge Creative (0%)</div>
                    <div className="text-xs text-stone-600">Ridge Creative takes:</div>
                  </div>
                  <div className="font-outfit font-extrabold text-base text-emerald-700 font-mono">
                    $0
                  </div>
                </div>

                {/* You Save Highlight */}
                <div className="bg-stone-900 text-white rounded-xl p-3 shadow-sm text-center">
                  <div className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold mb-0.5">
                    Your Direct Profit Per Order
                  </div>
                  <div className="font-outfit font-black text-2xl text-emerald-400 font-mono">
                    You save ${doorDashFee}
                  </div>
                  <div className="text-[10px] text-stone-400 mt-1">
                    Keep <span className="text-white font-bold">${restaurantKeeps}</span> instead of losing 30%
                  </div>
                </div>
              </div>

              <div className="text-[10px] text-center text-stone-500 font-medium">
                💡 At 120 orders/month, you save <strong className="text-stone-900 font-mono">${doorDashFee * 120}/mo</strong> in pure profit.
              </div>
            </div>
          )}

          {/* Tab 3: Table Reservation */}
          {activeTab === 'reserve' && (
            <div className="flex-1 overflow-y-auto space-y-2.5 text-left">
              {reservationConfirmed ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-3 space-y-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-outfit font-bold text-sm text-stone-900">
                    Table Reserved!
                  </h4>
                  <p className="text-[11px] text-stone-600">
                    Confirmed for <strong>{partySize}</strong> on <strong>{reserveDate}</strong> at <strong>{reserveTime}</strong>.
                  </p>
                  <p className="text-[10px] text-emerald-700 font-medium">
                    Automated SMS confirmation sent to customer with zero third-party per-cover fee.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleConfirmReservation} className="space-y-2.5">
                  <div className="text-[11px] font-bold text-stone-700">
                    Direct Table Booking (No OpenTable Fees)
                  </div>

                  <div>
                    <label className="text-[10px] text-stone-500 block mb-0.5 flex items-center gap-1">
                      <CalendarDays className="w-3 h-3 text-emerald-600" />
                      <span>Select Date:</span>
                    </label>
                    <select
                      value={reserveDate}
                      onChange={(e) => setReserveDate(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded-lg px-2 py-1.5 text-xs text-stone-900 focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Today">Tonight (Oct 27)</option>
                      <option value="Tomorrow">Tomorrow (Oct 28)</option>
                      <option value="This Friday">Friday Evening (7:00 PM)</option>
                      <option value="Saturday">Saturday Dinner</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-stone-500 block mb-0.5 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-emerald-600" />
                        <span>Time Slot:</span>
                      </label>
                      <select
                        value={reserveTime}
                        onChange={(e) => setReserveTime(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded-lg px-2 py-1.5 text-xs text-stone-900 focus:outline-none focus:border-emerald-500"
                      >
                        <option value="5:30 PM">5:30 PM</option>
                        <option value="6:00 PM">6:00 PM</option>
                        <option value="6:30 PM">6:30 PM</option>
                        <option value="7:00 PM">7:00 PM</option>
                        <option value="7:30 PM">7:30 PM</option>
                        <option value="8:00 PM">8:00 PM</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] text-stone-500 block mb-0.5 flex items-center gap-1">
                        <Users className="w-3 h-3 text-emerald-600" />
                        <span>Party Size:</span>
                      </label>
                      <select
                        value={partySize}
                        onChange={(e) => setPartySize(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded-lg px-2 py-1.5 text-xs text-stone-900 focus:outline-none focus:border-emerald-500"
                      >
                        <option value="2 Guests">2 Guests</option>
                        <option value="4 Guests">4 Guests</option>
                        <option value="6 Guests">6 Guests</option>
                        <option value="8+ Party">8+ Party</option>
                      </select>
                    </div>
                  </div>

                  <div className="bg-stone-100 rounded-lg p-2 text-[10px] text-stone-600">
                    ✨ Instant reservation syncs with your staff calendar. $0 per cover.
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 rounded-xl transition shadow-sm"
                  >
                    Confirm Table Reservation
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Bottom Home Indicator */}
          <div className="w-24 h-1 bg-stone-300 rounded-full mx-auto mt-2" />
        </div>

      </div>

      {/* Floating Badge (0% Commission. Always. Keep what you earn.) */}
      <div className="absolute -bottom-5 -right-2 sm:-bottom-6 sm:-right-4 z-20 bg-[#0c1a17]/95 border border-emerald-500/50 rounded-xl px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md flex items-center gap-3">
        <span className="font-outfit font-extrabold text-3xl sm:text-4xl text-[#10b981] leading-none drop-shadow-[0_0_12px_rgba(16,185,129,0.4)]">
          0%
        </span>
        <div className="flex flex-col text-left">
          <span className="font-outfit font-bold text-xs sm:text-sm text-white leading-tight">
            Commission. Always.
          </span>
          <span className="text-[10px] sm:text-xs text-emerald-400 font-medium leading-tight">
            Keep what you earn.
          </span>
        </div>
      </div>

    </div>
  );
}
