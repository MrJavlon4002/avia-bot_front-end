import { defineStore } from 'pinia'
import { clean_data } from './Data Cleaning';
import axios from 'axios';

export const useNewsStore = defineStore('News', {
    state: () => ({
        news: [] as any[],
        isLoading: false,
    }),
    getters: {
    },
    actions: {
        async taking_data() {
            const apiKey = '8047043b8e14426cbc79b19e83adb2f1'
            const url = 'https://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'apiKey='+apiKey;

            try {
                const response = await axios.get(url);
                const { data: { articles = [] } = {} } = response;
                const main_data = clean_data(articles);
                this.news = main_data;
                this.isLoading = true
                return main_data;
            } catch (error) {
                console.error("Failed to fetch data:", error);
                this.news = [];
            }

        },
        clean_data(data: Article[]): Article[] {
            const new_data: Article[] = [];
            
            for (const item of data) {
                if (item.title == '[Removed]' || item.content == '[Removed]' || item.content == null ) {
                    continue;
                }
                if (item.urlToImage == null) {
                    item.urlToImage = 'https://wallpapers.com/images/featured/airport-w6v47yjhxcohsjgf.jpg';
                }
                item.id = new_data.length;
                new_data.push(item);
            }
            return new_data;
        }
        
    },
})