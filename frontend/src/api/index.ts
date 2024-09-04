import axios from "axios"
import { Params, PlaceData } from "../types"

//* base url e sahip bir axios örneği
const api = axios.create({ baseURL: "http://localhost:4000" })


//* bütün konaklama yerlerini getiren fonksiyon
export const getPlaces = (params: Record<string, any>) =>
    api.get("/api/places", { params }).then((res) => res.data.places)

//* yeni bir konaklama yeri oluşturan fonksiyon
export const createPlace = (body: PlaceData) => {
    return api.post("/api/places", body)
}

//! 2 fonksiyonda süslü parantez kullanılmamasının sebebi 3. fonksiyondaki gibi fonksiyonu return etmek istediğimiz için. Yani {} olmamasıyla fonksiyonda return yazması aynı şeydir

//* 1 konaklama noktasını alan fonksiyon
export const getPlace = (id: string) =>
    api.get(`/api/place/${id}`).then((res) => res.data.place)

//* konaklama alanını sil
export const deletePlace = (id: string) =>
    api.delete(`/api/place/${id}`)