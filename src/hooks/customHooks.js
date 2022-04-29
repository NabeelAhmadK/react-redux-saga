import { useMediaQuery } from 'react-responsive';

export const useIsDesktop = () => {
  return useMediaQuery({ query: '(max-width: 1024px)' });
};
export const useIsMobile = () => {
  return useMediaQuery({ query: '(max-device-width: 700px)' });
};

export const useIsLandscape = () => {
  return useMediaQuery({ query: '(max-device-height: 450px)' });
};
