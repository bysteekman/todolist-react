import { taskApi } from "../../requests"

export const COLLECTION_TODAY_LOADED = 'collection/loaded'

export const loadCollectionToday = () => {
    return taskApi.getCollectionToday
        .then(collection => {return {
            type: COLLECTION_TODAY_LOADED,
            collection
        }})
}