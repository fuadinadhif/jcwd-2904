function Header({ name }: { name: string }) {
  const firstName = name.split(" ")[0];
  return (
    <header>
      <h1>Logo</h1>
      <p>Hello, {firstName}!</p>
    </header>
  );
}

export default Header;
