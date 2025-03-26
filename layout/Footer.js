const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="text text-center">
          <p>
            UltraFolio {new Date().getFullYear()}, Design By{" "}
            <a target="_blank" href="https://nawe.dev/">
              Ultrash
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
