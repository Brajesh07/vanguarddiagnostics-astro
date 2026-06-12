import React from 'react';

export interface VanguardButtonProps {
  href: string;
  variant?: 'solid' | 'outline';
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}

const VanguardButton: React.FC<VanguardButtonProps> = ({
  href,
  variant = 'solid',
  external = false,
  className = '',
  children,
}) => {
  const base = 'inline-flex items-center justify-center rounded font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2';
  const variants = {
    solid: 'bg-primary text-white hover:bg-[#017d8c]',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
  };

  const combinedClasses = `${base} ${variants[variant]} ${className}`;

  return (
    <a
      href={href}
      className={combinedClasses}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
};

export default VanguardButton;
