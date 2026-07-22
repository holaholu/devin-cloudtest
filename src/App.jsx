import { useEffect, useState } from 'react';
import VariantA from './variants/VariantA.jsx';
import VariantB from './variants/VariantB.jsx';
import VariantC from './variants/VariantC.jsx';

const variants = {
  a: VariantA,
  b: VariantB,
  c: VariantC,
};

function getVariantFromQuery() {
  const params = new URLSearchParams(window.location.search);
  return params.get('variant')?.toLowerCase();
}

function App() {
  const [variant, setVariant] = useState(() => {
    const fromQuery = getVariantFromQuery();
    return variants[fromQuery] ? fromQuery : 'a';
  });

  useEffect(() => {
    const url = new URL(window.location);
    url.searchParams.set('variant', variant);
    window.history.replaceState({}, '', url);
  }, [variant]);

  const Selected = variants[variant];

  return (
    <>
      <Selected />

      {/* A/B test variant switcher */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 bg-white/95 backdrop-blur border border-slate-200 shadow-xl rounded-full px-4 py-2">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Variant</span>
          {Object.keys(variants).map((v) => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              className={`w-9 h-9 rounded-full text-sm font-bold transition ${
                variant === v
                  ? 'bg-teal-600 text-white shadow'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
              aria-label={`Switch to variant ${v.toUpperCase()}`}
            >
              {v.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
