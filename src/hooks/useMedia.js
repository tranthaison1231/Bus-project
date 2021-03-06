import { useEffect, useState } from 'react';

function useMedia(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  // Activity normally for componentDidMount + componentDidUpdate
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addListener(listener);

    return () => media.removeListener(listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  // publish value for render
  return matches;
}

export default useMedia;
