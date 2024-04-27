import { useEffect } from 'react';

function usePageRefreshEffect(callback) {
  useEffect(() => {
    const handleRefresh = () => {
      callback();
    };

    window.addEventListener('beforeunload', handleRefresh);

    return () => {
      window.removeEventListener('beforeunload', handleRefresh);
    };
  }, [callback]);
}

export default usePageRefreshEffect;
