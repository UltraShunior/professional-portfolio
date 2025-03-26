const Experience = () => {
  const experiencesItems = [
    {
      id: 1,
      title: "Freelance",
      subTitle: "Software Developer",
      icon: "/assets/img/icons/adobe.svg",
      date: "2022-2025",
    },
    {
      id: 2,
      title: "MG Intelligence",
      subTitle: "Software Developer",
      icon: "/assets/img/icons/google.svg",
      date: "2022-2023",
    },
    {
      id: 3,
      title: "E.E.S.T N°5",
      subTitle: "Software Developer",
      icon: "/assets/img/icons/meta.svg",
      date: "2023-2025",
    },
    {
      id: 4,
      title: "CholoVazquez",
      subTitle: "Software Developer",
      icon: "/assets/img/icons/adobe.svg",
      date: "2023-2024",
    },
  ];
  return (
    <ul className="work-experiance-slider list-unstyled">
      {experiencesItems.map((item) => (
        <li key={item.id}>
          <div className="date">
            <p>{item.date}</p>
          </div>
          <div className="info">
            <div className="icon">
              <img src={item.icon} alt="adobe" />
            </div>
            <div className="text">
              <h4 className="title">{item.title}</h4>
              <h6 className="subtitle">{item.subTitle}</h6>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const WorkExperience = () => {
  return (
    <div className="card">
      <div className="card-body work-experiance-card">
        <h3 className="card-title">Work Experience</h3>
        <div className="work-experiance-main">
          <Experience />
          <Experience />
        </div>
      </div>
    </div>
  );
};
export default WorkExperience;
