import React, { useEffect, useState } from 'react';
import '../styles/RecentWork.scss';
import '../styles/Home.scss';

const FEED_ID = 'vrnU0Pmi8aM2Q8rV9jEA';

export default function RecentWork() {
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  useEffect(() => {
    // Ensure widget script is added once. Append after render so the
    // script can find the `<div data-behold-id>` container and initialize it.
    const src = 'https://w.behold.so/widget.js';
    const existing = document.querySelector(`script[src="${src}"]`);
    if (!existing) {
      const s = document.createElement('script');
      s.type = 'module';
      s.src = src;
      s.onload = () => setWidgetLoaded(true);
      s.onerror = () => setWidgetLoaded(false);
      document.head.appendChild(s);
    } else {
      // If already present, assume loaded (or will upgrade soon)
      setWidgetLoaded(true);
    }

    // No cleanup required for the script.
  }, []);

  return (
    <main className="recent-work-page">
      <h1 className="recent-title">Recent Work</h1>

      <div className="behold-container">
        <div data-behold-id={FEED_ID}></div>
      </div>

      {!widgetLoaded && (
        <p className="recent-fallback">If the gallery doesn't appear, try refreshing the page or open in an incognito window.</p>
      )}
    </main>
  );
}
