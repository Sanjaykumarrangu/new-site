'use client';

import { useEffect, useState } from 'react';

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/visit')
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.count === 'number') {
          setCount(data.count);
        } else {
          setCount(null);
        }
      })
      .catch((err) => {
        console.error('Visitor fetch error:', err);
        setCount(null);
      });
  }, []);

  return (
    <p className="text-sm text-gray-600">
      Site visits: {count !== null ? count : 'Loading...'}
    </p>
  );
}
