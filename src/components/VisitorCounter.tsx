'use client';

import { useEffect, useState } from 'react';

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/visit')
      .then(res => res.json())
      .then(data => setCount(data.count));
  }, []);

  return (
    <p className="text-sm text-center text-gray-600">
      👀 Site visits: {count ?? '...'}
    </p>
  );
}
