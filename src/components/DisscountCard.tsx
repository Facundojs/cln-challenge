import { Account } from "types";
import Link from "next/link";

const DisscountCard = ({ count: {
  images: [{ url }],
  crmid,
  name
} }: Record<'count', Account>) => {
  const redirect = `https://club.lanacion.com.ar/${crmid}`

  return (
    <div className="disscount-card">
      <div
        className="tourism-card-image"
      >
        <Link href={redirect} passHref>
          <img src={url} alt={name} className="image" />
        </Link>
      </div>
      <div className="disscount-card-content">
        <h2 className="disscount-card-title">
          <Link href={redirect}>
            {name}
          </Link>
        </h2>
        <button className="disscount-card-button"> QUIERO MI CÓDIGO </button>
      </div>
    </div>
  )
}

export default DisscountCard;