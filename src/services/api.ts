import { Food, Slider } from "@/types/data"
import axios from "axios"

const url = 'http://menu-backend-json-sever.vercel.app/'

const getProfile = async () => {
    const { data } = await axios.get(url + 'profile')
    return data
}

const getCategories = async () => {
    const { data } = await axios.get(url + 'categories')
    return data
}

const getSliders = async (): Promise<Slider[]> => {
    const { data } = await axios.get(url + 'sliders')
    return data
}

const getFoodOfSliders = async (id: number): Promise<Food[]> => {
    const { data } = await axios.get(url + `sliders/${id}/foods`)
    return data
}

const getFiltredFood = async (categoryId?: number, sort?: string, order?: string): Promise<Food[]> => {
    const { data } = await axios.get(url + `foods`
        , {
            params: {
                category: categoryId ? categoryId === -1 ? null : categoryId : null,
                _sort: sort ? sort === 'all' ? null : sort : null,
                _order: order ?? null
            }
        })
    return data
}

const getAdditives = async () => {
    const { data } = await axios.get(url + 'additives')
    return data
}

const getFoodDetail = async (id: number) => {
    const { data } = await axios.get(url + `food-detail/${id}`)
    return data
}

export {
    getCategories,
    getFoodOfSliders,
    getProfile,
    getSliders,
    getFiltredFood,
    getAdditives,
    getFoodDetail
}