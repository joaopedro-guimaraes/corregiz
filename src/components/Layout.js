import MyHead from "./MyHead";

function Layout({ myHeadTitle, children }) {
  return (
    <div className="container">
      <MyHead title={myHeadTitle} />

      <main className="main">{children}</main>

      <footer className="footer">
        <p>CorreGiz</p>
      </footer>
    </div>
  );
}

export default Layout;
