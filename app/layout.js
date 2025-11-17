export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <a href="/">Home</a> | <a href="/favorites">Favorites</a>
        <div style={{ marginTop: 20 }}>{children}</div>
      </body>
    </html>
  );
}
