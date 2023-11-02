import { useEffect, useState } from 'react';

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const container = document.getElementById('container');
    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };
    container.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      container.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return mousePosition;
}
