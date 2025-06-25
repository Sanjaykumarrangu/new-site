'use client';
import { useEffect, useState } from 'react';

export default function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch('/api/visit');
        const data = await res.json();
        setCount(data.count);
      } catch (error) {
        console.error('Failed to fetch visitor count:', error);
      }
    };

    fetchCount();
  }, []);

  return (
    <p className="text-sm">
      {count === null ? 'Getting visitor count...' : `Visitors: ${count}`}
    </p>
  );
}
