// app/donations/page.tsx
"use client";
import { useState } from 'react';
import { DonationProgress } from './components/DonationProgress';
import { PaymentMethodSelector } from './components/PaymentMethodSelector';
import { DonationAmountSelector } from './components/DonationAmountSelector';
import { SecurityInfo } from './components/SecurityInfo';

export default function DonationPage() {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  
  const campaignData = {
    goalAmount: 10000,
    currentAmount: 3500,
    currency: 'USD'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Procesando donación:', { amount, paymentMethod });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <DonationProgress 
          currentAmount={campaignData.currentAmount}
          goalAmount={campaignData.goalAmount}
          currency={campaignData.currency}
        />

        <div className="w-full mt-6 bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-black text-center mb-4">Realizar una Donación</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <DonationAmountSelector 
                amount={amount} 
                onAmountChange={setAmount}
              />
              
              <PaymentMethodSelector 
                selectedMethod={paymentMethod}
                onMethodChange={setPaymentMethod}
              />
              
              <SecurityInfo />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#f40028] to-[#900b1f] hover:from-[#900b1f] hover:to-[#f40028] text-white py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                disabled={!amount || !paymentMethod}
              >
                Donar ${amount || '0'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}