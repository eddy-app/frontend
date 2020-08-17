import { tw } from 'tailwindcss-classnames';

export const publicNavigation = tw('grid', 'grid-cols-4', 'items-center');

export const loginNavigation = tw('grid', 'grid-cols-2', 'items-center');

export const privateNavigation = tw('grid', 'grid-cols-2', 'items-center');

export const navlist = tw('text-center');

export const navlink = tw('font-medium', 'col-span-1');

export const ctaSignup = tw(
  'col-span-1',
  'bg-transparent',
  'hover:bg-primary',
  'text-black-500',
  'font-medium',
  'hover:text-white',
  'py-2',
  'px-4',
  'ml-2',
  'border',
  'border-black',
  'hover:border-transparent',
  'rounded',
  'transition-all',
  'duration-500',
  'ease-in-out'
);
