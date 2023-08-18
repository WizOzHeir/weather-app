import { CityCoords } from "./city-coords.model"

export interface CityModel {
    name?: string
    state?: string,
    country?: string,
    coord?: CityCoords
}