import Awards from "@/components/Awards";
import Brands from "@/components/Brands";
import Faq from "@/components/Faq";
import ServiceItem from "@/components/ServiceItem";
import Testimonial from "@/components/Testimonial";
import WorkTogether from "@/components/WorkTogether";
import BentoFolioLayout from "@/layout/BentoFolioLayout";
const page = () => {
  const serviceItems = [
    {
      id: 7,
      icon: "/assets/img/icons/web-development.svg",
      title: "Web Development",
    },
    { id: 2, icon: "/assets/img/icons/app.svg", title: "Mobile Apps" },
    { id: 1, icon: "/assets/img/icons/prd-design.svg", title: "UI UX Design" },
    {
      id: 3,
      icon: "/assets/img/icons/ui-ux.svg",
      title: "DevOps",
    },
  ];
  return (
    <BentoFolioLayout>
      {" "}
      <div className="col-xl-8">
        <div className="card content-box-card">
          <div className="card-body">
            <div className="top-info">
              <div className="text">
                <h1 className="main-title">
                  Services I <span>Offered</span>
                </h1>
                <p>
                  Transforming Ideas into Innovative Reality, Elevate Your
                  Vision with Our Expert <b>Product Design and Development</b>{" "}
                  Services!
                </p>
              </div>
              <div className="available-btn">
                <span>
                  <i className="fas fa-circle" /> Available For Hire
                </span>
              </div>
            </div>
            <div className="services">
              <div className="row g-4">
                <ServiceItem items={serviceItems} />
              </div>
              <div className="block-image">
                <img
                  src="assets/img/blog/blog-img-1.jpg"
                  alt="blog-img-1"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <Brands />
            <Testimonial />
            <Awards />
            <Faq />
            <WorkTogether />
          </div>
        </div>
      </div>
    </BentoFolioLayout>
  );
};
export default page;
