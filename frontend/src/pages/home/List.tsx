import { useQuery } from "@tanstack/react-query"
import { Params, Place } from "../../types"
import { getPlaces } from "../../api"
import Loader from "../../components/loader"
import Error from "../../components/error"
import Card from "../../components/card"
import { useSearchParams } from "react-router-dom"

const List = () => {

    //* url deki parametreleri al ve nesne haline getir
    const [params] = useSearchParams()
    const paramsObj = Object.fromEntries(params.entries())

    const { isLoading, error, data, refetch } = useQuery<Place[]>({
        queryKey: ["places", paramsObj],
        queryFn: () => getPlaces(paramsObj as Params),
    })

    return (
        <div className="mt-10">
            <h1 className="font-bold text-2xl">Yakınlarınızdaki Lokasyonlar</h1>

            <div>
                {isLoading ? (
                    <Loader />
                ) : error ? (
                    <Error info={error.message} retry={refetch} />
                ) : (
                    <div className="grid gap-5 mt-5">
                        {data?.map((place) => (
                            <Card place={place} key={place.id} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default List