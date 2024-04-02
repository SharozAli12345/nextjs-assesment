import { ENDPOINTS } from "../constants/endpoints";

const getFiles = async (sortBy = '') => {
    const url = sortBy ? `${ENDPOINTS.GET_FILES}?sortBy=${sortBy}` : ENDPOINTS.GET_FILES
    const res = await fetch(url)
    const { data = [] } = await res.json()
    return data;
}
export const FileService = {
    getFiles
}