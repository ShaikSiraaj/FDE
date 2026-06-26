"use client";

import React, { useEffect, useRef } from "react";

const PRICING_MATRIX = {
  tiers: [
    { id: "starter", name: "Starter", basePrice: 29 },
    { id: "pro", name: "Pro", basePrice: 99 },
    { id: "enterprise", name: "Enterprise", basePrice: 299 },
  ],
  currencies: {
    USD: { symbol: "$", rate: 1 },
    INR: { symbol: "₹", rate: 75 },
    EUR: { symbol: "€", rate: 0.9 },
  },
  annualDiscount: 0.8,
};

export default function Pricing() {
  const currencyRef = useRef<"USD" | "INR" | "EUR">("USD");
  const billingRef = useRef<"monthly" | "annual">("monthly");
  const priceNodes = useRef<{ [key: string]: HTMLSpanElement | null }>({});

  const updatePrices = () => {
    const currency = currencyRef.current;
    const billing = billingRef.current;
    const { symbol, rate } = PRICING_MATRIX.currencies[currency];
    const discount = billing === "annual" ? PRICING_MATRIX.annualDiscount : 1;

    PRICING_MATRIX.tiers.forEach((tier) => {
      const node = priceNodes.current[tier.id];
      if (node) {
        const finalPrice = Math.round(tier.basePrice * rate * discount);
        node.textContent = `${symbol}${finalPrice}`;
      }
    });
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    currencyRef.current = e.target.value as any;
    updatePrices();
  };

  const handleBillingToggle = (type: "monthly" | "annual") => {
    billingRef.current = type;
    updatePrices();

    const monthlyBtn = document.getElementById("billing-monthly");
    const annualBtn = document.getElementById("billing-annual");
    if (monthlyBtn && annualBtn) {
      if (type === "monthly") {
        monthlyBtn.classList.add("bg-blue-600", "text-white");
        monthlyBtn.classList.remove("text-slate-400");
        annualBtn.classList.remove("bg-blue-600", "text-white");
        annualBtn.classList.add("text-slate-400");
      } else {
        annualBtn.classList.add("bg-blue-600", "text-white");
        annualBtn.classList.remove("text-slate-400");
        monthlyBtn.classList.remove("bg-blue-600", "text-white");
        monthlyBtn.classList.add("text-slate-400");
      }
    }
  };

  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Scalable Intelligence</h2>
          <p className="text-slate-400">Choose the plan that fits your data throughput.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <div className="bg-slate-900/50 p-1 rounded-xl flex border border-white/5">
            <button
              id="billing-monthly"
              onClick={() => handleBillingToggle("monthly")}
              className="px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-out bg-blue-600 text-white"
            >
              Monthly
            </button>
            <button
              id="billing-annual"
              onClick={() => handleBillingToggle("annual")}
              className="px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-out text-slate-400"
            >
              Annual
            </button>
          </div>

          <select
            onChange={handleCurrencyChange}
            className="bg-slate-900/50 border border-white/5 text-white px-4 py-2 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200 ease-out"
          >
            <option value="USD">USD ($)</option>
            <option value="INR">INR (₹)</option>
            <option value="EUR">EUR (€)</option>
          </select>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_MATRIX.tiers.map((tier) => (
            <div
              key={tier.id}
              className="bg-slate-900/30 border border-white/5 p-8 rounded-3xl hover:border-blue-600/50 transition-all duration-200 ease-out"
            >
              <h3 className="text-lg font-medium text-slate-400 mb-2">{tier.name}</h3>
              <div className="text-4xl font-bold mb-6">
                <span
                  ref={(el) => {
                    priceNodes.current[tier.id] = el;
                  }}
                >
                  ${tier.basePrice}
                </span>
                <span className="text-sm font-normal text-slate-500 ml-2">
                  /month
                </span>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Advanced AI Core
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Real-time Data Sync
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Premium Support
                </li>
              </ul>
              <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all duration-200 ease-out font-medium">
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
