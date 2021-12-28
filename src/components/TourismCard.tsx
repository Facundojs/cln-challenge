import Router from "next/router";
import { Account } from "types";
import Link from "next/link";

const TourismCard = ({ count: {
  crmid,
  images: [{ url }],
  benefits,
  name,
  branches: [{ location }]
} }: Record<'count', Account>) => {

  const highestBenefit = benefits.reduce((acc, curr) => {
    const num = Number(curr.type_benefit.replace('%', ''));
    return num > acc ? num : acc;
  }, 0);

  const redirect = `https://club.lanacion.com.ar/${crmid}`

  return (
    <div className="tourism-card">
      <div
        className="tourism-card-image"
      >
        <Link passHref href={redirect}>
          <img src={url} alt={name} className="image" />
        </Link>
      </div>
      <div className="tourism-card-content">
        <h2
          className="tourism-card-title"
        >
          <Link passHref href={redirect}>

            {name}
          </Link>

        </h2>
        <div className="disscounts-wrapper">
          <p
            className={`b-${highestBenefit}`}
          >
            {highestBenefit}
          </p>
        </div>
        <p className="location">
          <i className="fas fa-map-marker-alt"></i>
          {
            location < 1000 ? ` A ${location} mts` : ` A ${location / 1000} km`
          }
        </p>
      </div>

    </div>
  )
}

export default TourismCard;