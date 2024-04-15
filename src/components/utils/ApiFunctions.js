import axios from "axios"

export const api = axios.create({
    baseURL: "http://localhost:9192"
})

/* This function adds a new room to the database */
export async function addRoom(photo, roomeType, roomPrice) {
    const formData = new FormData()
    formData.append("photo", photo)
    formData.append("roomeType", roomeType)
    formData.append("roomPrice", roomPrice)

    const response = await api.post("/room/add/new-room", formData)
    if (response.status === 201) {
        return true
    } else {
        return false
    }
}

/* This function gets all room types from the database */
export async function getRoomTypes() {
    try {
        const response = await api.get("/rooms/room/types")
        return response.data
    } catch (error) {
        throw new Error("Error fetching room types")
    }
}