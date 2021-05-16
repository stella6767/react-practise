import React, { useEffect, useState } from 'react';

export default function usePromise(promiseCreator, deps) {
  const [loading, setLoaing] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoaing(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (error) {
        setError(error);
      }
      setLoaing(false);
    };
    process();
  }, deps);

  return [loading, resolved, error];
}
