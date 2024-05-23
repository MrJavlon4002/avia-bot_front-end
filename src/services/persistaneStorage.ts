export const getItem = (key: string) => {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }
    catch(error) {
        console.log(error);
        return null;
    }
}

export const setItem = (key: string, data: any) => {
    try {
        localStorage.setItem(key,JSON.stringify(data))
    }
    catch(error) {
        console.log(error);
    }
}
