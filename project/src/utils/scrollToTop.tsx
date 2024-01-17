import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  const scrollToTop = (startTime: number) => {
    const startingY = window.scrollY;
    const targetY = 0;
    const animationDuration = 750;

    const easeInOutQuad = (t: number): number =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const animateScroll = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const newPosition =
        easeInOutQuad(elapsed / animationDuration) * (targetY - startingY) +
        startingY;
      window.scrollTo(0, newPosition);

      if (elapsed < animationDuration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    const startTime = performance.now();
    scrollToTop(startTime);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
