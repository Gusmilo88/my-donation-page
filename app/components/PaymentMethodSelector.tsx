// app/donations/components/PaymentMethodSelector.tsx
"use client";

interface PaymentMethodSelectorProps {
  selectedMethod: string;
  onMethodChange: (method: string) => void;
}

export const PaymentMethodSelector = ({ selectedMethod, onMethodChange }: PaymentMethodSelectorProps) => {
  const paymentMethods = [
    { id: 'mercadopago', label: 'MercadoPago' },
    { id: 'paypal', label: 'PayPal' },
    { id: 'transferencia', label: 'Transferencia Bancaria' },
    { id: 'webpay', label: 'WebPay' }
  ];

  return (
    <div className="space-y-4">
<label className="block text-sm font-medium text-black">Método de pago</label>
<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            type="button"
            className={`flex items-center px-4 py-2 rounded-lg border transition-colors
              ${selectedMethod === method.id 
                ? 'bg-gradient-to-r from-[#f40028] to-[#900b1f] text-white border-[#f40028]' 
                : 'bg-white text-gray-700 border-gray-300 hover:border-[#f40028]'}`}
            onClick={() => onMethodChange(method.id)}
          >
            {method.label}
          </button>
        ))}
      </div>
    </div>
  );
};