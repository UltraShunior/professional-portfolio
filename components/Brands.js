const Brands = () => {
  const brandItems = [
    { id: 1, icon: "assets/img/icons/midudev-icon.png", name: "Midudev" },
    { id: 7, icon: "assets/img/icons/mercadolibre-icon.png", name: "Mercado Libre" },
    { id: 3, icon: "assets/img/icons/bridgestone-icon.png", name: "Bridgestone" },
    { id: 5, icon: "assets/img/icons/freecodecamp-icon.png", name: "FreeCodeCamp" },
    { id: 4, icon: "assets/img/icons/framer.svg", name: "Framer" },
    { id: 6, icon: "assets/img/icons/galileo-icon.png", name: "Galileo Galilei" },
    { id: 2, icon: "assets/img/icons/webflow.svg", name: "Webflow" },
    { id: 8, icon: "assets/img/icons/saleor-icon.png", name: "Saleor" },
  ];
  return (
    <div className="working-with-area">
      <h2 className="main-common-title">
          Working with global brands💫
      </h2>
      <div className="working-with-main">
        {brandItems.map((item) => (
          <div className="items" key={item.id}>
            <img src={item.icon} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Brands;
