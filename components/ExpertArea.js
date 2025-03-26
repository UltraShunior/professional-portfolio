import Image from "next/image";

const ExpertArea = () => {
  const expertItems = [
    { id: 1, icon: "/assets/img/icons/node-icon.webp", name: "Node.js" },
    { id: 6, icon: "/assets/img/icons/postgresql-icon.webp", name: "Postgres" },
    { id: 3, icon: "/assets/img/icons/kotlin-icon.png", name: "Kotlin" },
    { id: 4, icon: "/assets/img/icons/nextjs-icon.svg", name: "Next.js" },  //TODO: Update icon
    { id: 5, icon: "/assets/img/icons/tailwind-css.svg", name: "Tailwind" },  //TODO: Update icon
    { id: 2, icon: "/assets/img/icons/notion.svg", name: "Notion" },
  ];
  return (
    <div className="card expertise-card">
      <div className="card-body">
        <h3 className="card-title">My Expert Area</h3>
        <div className="expertise-main mt-24">
          <div className="row g-3">
            {expertItems.map((item) => (
              <div className="col-xl-4 col-md-4 col-sm-6 col-6" key={item.id}>
                <div className="expertise-item">
                  <div className="image text-center">
                    <Image src={item.icon} alt={item.name} width={100} height={100} />
                  </div>
                  <div className="text">
                    <h4 className="title">{item.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExpertArea;
