// app/donations/components/DonationProgress.tsx
"use client";

interface DonationProgressProps {
  currentAmount: number;
  goalAmount: number;
  currency: string;
}

export const DonationProgress = ({ currentAmount, goalAmount, currency }: DonationProgressProps) => {
  const progressPercentage = Math.min(
    (currentAmount / goalAmount) * 100,
    100
  );

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: currency
    }).format(amount);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow p-6">
      <div className="text-center">
        {/* Imagen más pequeña y centrada */}
        <div className="mb-6 flex justify-center">
          <img 
            src="/logoAl.png" 
            alt="Animal Libre" 
            className="w-64 h-auto object-contain" // Ancho fijo de 256px
          />
        </div>
        
        <h2 className="text-2xl font-bold mb-4 text-black">Meta de Donaciones</h2>
        <p className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#f40028] to-[#900b1f] text-transparent bg-clip-text">
          {formatCurrency(currentAmount)}
        </p>
        <p className="text-black mb-4">
          recaudado de {formatCurrency(goalAmount)}
        </p>
        
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{ 
              width: `${progressPercentage}%`,
              background: 'linear-gradient(90deg, rgba(244,0,40,1) 0%, rgba(144,11,31,1) 100%)'
            }}
          />
        </div>
        <p className="text-sm text-black mt-2">
          {progressPercentage.toFixed(1)}% completado
        </p>
      </div>
    </div>
  );
};