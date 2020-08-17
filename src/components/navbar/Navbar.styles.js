import { tw } from 'tailwindcss-classnames';

export const header = tw(
  'flex',
  'justify-between',
  'flex-no-wrap',
  'items-center'
);

export const logo = tw(
  'flex justify-between flex-no-wrap',
  'items-baseline',
  'font-display',
  'text-2xl',
  'font-bold',
  'antialiased'
);

export const ctaDashboard = tw(
  'col-span-1',
  'bg-blue-600',
  'hover:bg-blue-700',
  'text-white',
  'font-medium',
  'hover:text-white',
  'py-2',
  'px-4',
  'rounded',
  'transition-all',
  'duration-200',
  'ease-in-out'
);
