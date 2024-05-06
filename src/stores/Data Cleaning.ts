type Article = {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
    id?: number;
}

async function taking_data(): Promise<Article[]> {
    const url = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=8047043b8e14426cbc79b19e83adb2f1';
    const req = new Request(url);
    try {
        const response = await fetch(req);
        const data = await response.json();
        const main_data = clean_data(data.articles);
        return main_data;
    } catch (error) {
        console.error("Failed to fetch data:", error);
        return [];
    }
}

function clean_data(data: Article[]): Article[] {
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

// Note: You might want to export the function itself rather than its invocation
export { taking_data, clean_data };
