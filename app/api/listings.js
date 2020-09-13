import apiClient from './client';

const getListings = () => apiClient.get('listings');

export default {
    getListings
}