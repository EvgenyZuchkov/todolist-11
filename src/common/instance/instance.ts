import axios, { AxiosInstance } from "axios";

const apiKey = '040f6ebf-f516-44f8-af71-1c8422758929'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxOTA3IiwibG9naW4iOiJqZW55YXp1Y2hrb3YiLCJpYXQiOjE3OTUwMzEwNzUsImV4cCI6MTc5NTAzODI3NSwianRpIjoiNmU4ODMyYWUtNDg0Mi00MTYyLThjNzItMzYwMWUxNTA2OGE0In0.-xelD9ETf9u6pA9XLgkedEyNCR-FamSg7Da6bQYaGX0"


export const instance: AxiosInstance = axios.create({
    baseURL: "https://trelly.it-incubator.app/api/1.0",
    headers: {
        Authorization: `Bearer ${token}`,
        "api-key": apiKey,
    }
})