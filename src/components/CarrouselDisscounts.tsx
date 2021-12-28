import OutlinedButton from "./OutlinedButton";
import DisscountCard from "./DisscountCard";
import { useState, useEffect } from "react";
import { Account } from "types";
import Loading from "./Loading";

const CarrouselDisscounts = () => {
  const [counts, setCounts] = useState<Account[]>([]);
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const getCounts = async (): Promise<void> => {
    setLoading(true);
    const response = await fetch(`/api/disscounts/${page}`);
    const data = await response.json();
    setCounts(data);
    setLoading(false);
  }
  const noMoreCounts = !counts.length && !loading

  const handleChangePage = async (page: number): Promise<void> => {
    setLoading(true)
    const response = await fetch(`/api/disscounts/${page}`)
    const data = await response.json()
    setPage(page)
    setCounts([...data])
    setLoading(false)
  }

  useEffect(() => {
    getCounts()
  }, [])

  return (
    <div className="disscount-carrousel-wrapper bg-gray">
      {
        page === 0 ? (
          <i className="fas fa-chevron-left arrow-disabled"></i>
        ) : (
          <i className="fas fa-chevron-left arrow"
            onClick={() => handleChangePage(page - 1)}
          ></i>
        )
      }
      <div>
        <div className="carrousel-header">
          <h1>Códigos de descuento</h1>
          <OutlinedButton text="TODOS LOS CÓDIGOS" />
        </div>
        <div className="disscount-cards-wrapper">
          {loading && <Loading />}
          {
            (noMoreCounts) && (
              <p>No hay más cuentas disponibles</p>
            )
          }
          {
            counts.map((count: Account, index) => (
              <DisscountCard
                key={index}
                count={count}
              />
            ))
          }
        </div>
      </div>

      {
        noMoreCounts ?
          (
            <i className="fas fa-chevron-right arrow-disabled"></i>
          ) :
          (
            <i className="fas fa-chevron-right arrow"
              onClick={() => handleChangePage(page + 1)}
            ></i>
          )
      }
    </div>
  )
}

export default CarrouselDisscounts;