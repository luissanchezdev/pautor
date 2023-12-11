import { apiKey } from "./config";
import axios from "axios";

// Endpoints

const baseUrl = 'https://newsapi.org/v2/'
const breakingNewsUrl = `${baseUrl}top-headlines?country=us&apiKey=${apiKey}`
const recommendedNewsUrl = `${baseUrl}top-headlines?country=us&category=business&apiKey=${apiKey}`

const categoryNewsUrl = (category) => `${baseUrl}top-headlines?country=us&category=${category}&apiKey=${apiKey}`
const searchNewsUrl = (query) =>  `${baseUrl}everything?q=${query}&apiKey=${apiKey}`

const newsApiCall = async (endpoints, params) => {
  const options = {
    method: 'GET',
    url: endpoints,
    params: params ? params : {}
  }

  try {
    const response = await axios.request(options)
    return response.data
  } catch (error) {
    console.log(error)
    return {}
  }
}

export const  getBreakingNews = async () => {
  return await newsApiCall(breakingNewsUrl)
}

export const getRecommendedNews = async () => {
  return await newsApiCall(recommendedNewsUrl)
}

export const getCategoryNews = async (category) => {
  const endpoint = categoryNewsUrl(category)
  return await newsApiCall(endpoint)
}

export const getSearchNewsUrl = async (query) => {
  const endpoint = searchNewsUrl(query)
  return await newsApiCall(endpoint)
}
