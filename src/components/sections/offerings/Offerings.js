import Image from "next/image";

const offerings = [
  {
    icon: "fas fa-building",
    title: "Global Sourcing Solutions",
    desc: "End-to-end food ingredient sourcing support for global food brands and importers seeking reliable supply from India.",
  },
  {
    icon: "fas fa-hands-helping",
    title: "Private Label Solutions",
    desc: "Launch your own food ingredient brand with customized packaging, private labeling, and export-ready supply from Gujarat, India.",
  },
  {
    icon: "fas fa-ship",
    title: "Bulk Ingredient Supply",
    desc: "High-quality natural food ingredients   fruit powders, vegetable powders, spices, honey, and herbal powders   for industrial and wholesale buyers.",
  },
  {
    icon: "fas fa-industry",
    title: "Third-Party Fulfillment",
    desc: "Scalable, cost-effective third-party merchant trading and merchant export for distributors, food brands, and nutraceutical companies sourcing from India.",
  },
];

const Offerings = () => {
  return (
    <section className="home-offerings">
      <div className="home-offerings__container">
        <div className="home-offerings__heading">
          <h2>Our Offerings</h2>
          <p>Comprehensive Food Ingredient Supply & Sourcing Solutions for Global Buyers</p>
        </div>

        <div className="home-offerings__grid">
          {offerings.map(({ icon, image, title, desc }) => (
            <article className="home-offerings__card" key={title}>
              <div className="home-offerings__icon" aria-hidden="true">
                {image ? (
                  <Image
                    src={image}
                    alt=""
                    width={78}
                    height={58}
                    sizes="78px"
                  />
                ) : (
                  <i className={icon}></i>
                )}
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
