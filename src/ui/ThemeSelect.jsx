import { useSyncExternalStore } from 'react';
import './ThemeSelect.css';

// The head script owns browser effects; this component only presents its state.
export default function ThemeSelect() {
  const store = window.huixinTheme;
  const preference = useSyncExternalStore(store.subscribe, store.getPreference, () => 'system');
  return (
    <label className="theme-select">
      <svg className="theme-select-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        {preference === 'light' ? <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>
          : preference === 'dark' ? <path d="M20.5 13A8.5 8.5 0 0 1 11 3.5 8.5 8.5 0 1 0 20.5 13Z" />
            : <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8m-4-4v4" /></>}
      </svg>
      <select aria-label="Color theme" value={preference}
        onChange={(event) => store.setPreference(event.target.value)}>
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>
  );
}
