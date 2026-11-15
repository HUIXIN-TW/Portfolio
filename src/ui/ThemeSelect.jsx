import { useSyncExternalStore } from 'react';
import './ThemeSelect.css';

// The head script owns browser effects; this component only presents its state.
export default function ThemeSelect() {
  const store = window.huixinTheme;
  const preference = useSyncExternalStore(store.subscribe, store.getPreference, () => 'system');
  return (
    <label className="theme-select">
      <span>Theme</span>
      <select aria-label="Color theme" value={preference}
        onChange={(event) => store.setPreference(event.target.value)}>
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>
  );
}
