// app/donations/components/DonationAmountSelector.tsx
"use client";

interface DonationAmountSelectorProps {
  amount: string;
  onAmountChange: (amount: string) => void;
}

export const DonationAmountSelector = ({ amount, onAmountChange }: DonationAmountSelectorProps) => {
  const presetAmounts = [100, 500, 1000, 5000];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-2 mb-4">
        {presetAmounts.map((preset) => (
          <button
            key={preset}
            type="button"
            className={`py-2 px-4 rounded-lg border transition-colors
              ${amount === preset.toString() 
                ? 'bg-gradient-to-r from-[#f40028] to-[#900b1f] text-white border-[#f40028]' 
                : 'bg-white text-gray-700 border-gray-300 hover:border-[#f40028]'}`}
            onClick={() => onAmountChange(preset.toString())}
          >
            ${preset}
          </button>
        ))}
      </div>

      <div>
      <label className="block text-sm font-medium text-black mb-2">Monto personalizado</label>
      <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          placeholder="Ingresa el monto"
          className="w-full px-3 py-2 text-black border rounded-lg"
        />
      </div>
    </div>
  );
};