import OutlinedButton from "./OutlinedButton"
import { useEffect, useState } from "react"
import TourismCard from "./TourismCard"
import { Account } from "types"
import Loading from "./Loading"

const CarrouselTourism = () => {
  const [counts, setCounts] = useState<Account[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)

  const getCounts = async (): Promise<void> => {
    setLoading(true)
    const response = await fetch(`/api/tourism/${0}`)
    const data = await response.json()
    setCounts(data)
    setLoading(false)
  }

  useEffect(() => {
    getCounts()
  }, [])

  const handleChangePage = async (page: number): Promise<void> => {
    setLoading(true)
    const response = await fetch(`/api/tourism/${page}`)
    const data = await response.json()
    setPage(page)
    setCounts([...data])
    setLoading(false)
  }

  const noMoreCounts = !counts.length && !loading

  return (
    <div className="carrousel-wrapper">
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
          <h1>Turismo en Buenos Aires</h1>
          <OutlinedButton text="TODOS LOS BENEFICIOS" />
        </div>

        <div className="cards-wrapper">
          {loading && <Loading />}
          {
            counts.map((count, i) => (
              <TourismCard key={i} count={count} />
            ))
          }
          {
            (noMoreCounts) && (
              <p>No hay más cuentas disponibles</p>
            )
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

export default CarrouselTourism