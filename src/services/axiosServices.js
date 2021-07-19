const axios = require('axios');

export const getBookInfo = async (bookIsbn) => {
    const responseObject = {}
    return await axios.get(`https://openlibrary.org/api/books?bibkeys=ISBN:${bookIsbn}&format=json`)
        .then(response => {
            responseObject.cover = response.data[`ISBN:${bookIsbn}`].thumbnail_url;
            infoUrl = response.data[`ISBN:${bookIsbn}`].info_url;
            infoUrl = infoUrl.split("/");
            infoUrl.pop();
            infoUrl = infoUrl.join("/");
            infoUrl += ".json";
            return infoUrl;
        })
        .then(async infoUrl => {
            const info = await axios.get(infoUrl)
                .then(response => {
                    return response.data;
                })
            return info
        })

    

}