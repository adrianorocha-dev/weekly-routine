export default function setSQLiteOnGlobalThis(SQLite) {
  window.Expo = Object.freeze({ ...window.Expo, SQLite });
}
