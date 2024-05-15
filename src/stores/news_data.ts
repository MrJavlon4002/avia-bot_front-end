// news_data.ts
import { defineStore } from 'pinia'
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
            const url = 'http://51.20.34.222:8000/';
            try {
                const response = await axios.get(url);
                
                const main_data = response.data;
                this.filterImage(main_data);
                this.news = main_data;
                this.isLoading = true
                return main_data;
            } catch (error) {
                console.error("Failed to fetch data:", error);
                this.news = [];
            }

        },
        filterImage(data : any[]) {
            for (let item of data) {
                // if(item.image == ''){
                    item.image = 'https://www.airport-technology.com/wp-content/uploads/sites/14/2022/01/shutterstock_758602234-min-scaled-e1641297696653.jpg'
                // }
            }
        },
        
    },
})