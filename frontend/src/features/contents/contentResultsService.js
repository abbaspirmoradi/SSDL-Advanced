import axios from 'axios'
import { library_url, doi_url, isbn_url, API_URL } from "../../config/env";

const API = library_url;
const API_Base = API_URL;
const DOC_COVER_API = doi_url
const BOOK_COVER_API = isbn_url

//@desc Get SERP
//@route GET /API/
// A simple hash function that returns a positive integer from a string.
const hashString = (str) => {
    let hash = 0;
    if (str.length === 0) return hash;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash);
};


export const getBookResultLists = async (data, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    try {
        console.log('data.offset = ', data.offset);
        console.log('data.limit = ', data.limit);

        // Get the book results.
        const bookResponse = await axios.get(
            API + data.query + '&offset=' + data.offset + '&limit=' + (data.limit - 1),
            config
        );

        // bookResponse.data is an object that includes docs.
        const bookData = bookResponse.data;
        let bookDocs = bookData.docs; // Extract the docs array.
        if (!Array.isArray(bookDocs)) {
            console.error("bookData.docs is not an array:", bookDocs);
            bookDocs = [];
        }

        // Only insert a serendipity doc if there are more than 3 book docs.
        if (bookDocs.length > 3) {
            const SelectedWS = localStorage.getItem('wpname');
            // Decide which endpoint to call based on workspace name.
            let endpoint;
            // if (SelectedWS.toLowerCase().includes('ai')) {
            //     endpoint = API_URL + "serendipities/getHCISerendipity";
            // } else {
            //     endpoint = API_URL + "serendipities/getAISerendipity";
            // }
        var userId=localStorage.getItem('loggedin-user')
            if (userId=="test") {
                if (SelectedWS.toLowerCase().includes('cybersecurity')) {
                    endpoint = API_URL + "serendipities/getWIOTSerendipity";
                } else {
                    endpoint = API_URL + "serendipities/getPPCSerendipity";
                }
            }else {
                if (SelectedWS.toLowerCase().includes('ai')) {
                    endpoint = API_URL + "serendipities/getHCISerendipity";
                } else {
                    endpoint = API_URL + "serendipities/getAISerendipity";
                }
            }
            // Hash query to avoid issues with long or similar strings
            const queryHash = hashString(data.query);
            const storageKey = `serendipity_${queryHash}_${data.offset}`;
            let storedSerendipityId = localStorage.getItem(storageKey);
            let serendipityDoc = null;

            // Ensure it's a valid non-empty string and not the string "undefined"
            if (storedSerendipityId && storedSerendipityId !== "undefined") {
                try {
                    const response = await axios.get(API_URL + "serendipities/getSerendipityById/" + storedSerendipityId, config);
                    serendipityDoc = response.data;
                } catch (fetchError) {
                    console.error("Error fetching stored serendipity doc:", fetchError);
                }
            }

            // If we didn't retrieve a stored doc, fetch a new one.
            if (!serendipityDoc) {
                const serendipityResponse = await axios.get(endpoint + "?offset=" + data.offset, config);
                serendipityDoc = serendipityResponse.data;
                // Store the new doc's _id for this query+offset combination.
                localStorage.setItem(storageKey, serendipityDoc._id);
            }

            // Determine the insertion position deterministically based on the query.
            const allowedPositions = [2, 4, 6];
            let insertionIndex = allowedPositions[Math.floor(Math.random() * allowedPositions.length)];
            if (insertionIndex > bookDocs.length) {
                insertionIndex = bookDocs.length;
            }

           // Insert the serendipity doc into the docs array immutably.
            const updatedDocs = [
                ...bookDocs.slice(0, insertionIndex),
                serendipityDoc,
                ...bookDocs.slice(insertionIndex)
            ];
            // const updatedDocs = [
            //     ...bookDocs
            // ];
            bookData.docs = updatedDocs;
        }

        // Return the complete book data object.
        return bookData;
    } catch (error) {
        console.error('Error in getBookResultLists:', error);
        throw error;
    }
};

// get document cover by doi
const getDocumentCover = async (doi, token) => {
    const config ={
        headers: {
            Authorization: `Bearer ${token}`
        }
    }  
    
    try {
        const response = await axios.get(
            DOC_COVER_API + 
            doi +  
            "?" +
            'include=journal&' +
            'access_token=66db3295-b03a-4a98-ae87-3473b6d85542')
        
        // console.log(response)
        // console.log(response.data.included[0])
    
        return response.data.included[0] 
    } catch (error) {
        // Handle the error
        if (error.response) {            
            

            if(error.response.status === 404){
                console.log('error')
                return []
            }
        } else if (error.request) {            
            console.error("No response received:", error.request);
        } else {            
            console.error("Request setup error:", error.message);
        }
        // Return null or throw an error depending on your requirements
        throw error;
    }
}

// get book cover by isbn
const getBookCover = async (isbn, token) => {
    const config ={
        headers: {
            Authorization: `Bearer ${token}`
        }
    }  
    
    try {
        const response = await axios.get(
            BOOK_COVER_API + 
            isbn +  '/sc.jpg'
            )
        
        console.log(response)
        console.log(response.data.included[0])
    
        return response.data.included[0] 
    } catch (error) {
        // Handle the error
        if (error.response) { 
            if(error.response.status === 404){
                console.log('error')
                return []
            }
        } else if (error.request) {            
            console.error("No response received:", error.request);
        } else {            
            console.error("Request setup error:", error.message);
        }
        // Return null or throw an error depending on your requirements
        throw error;
    }
}

const getBookCover1 = async (doi, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    try {
        const response = await axios.get(
            `${DOC_COVER_API}${doi}?include=journal&access_token=66db3295-b03a-4a98-ae87-3473b6d85542`,
            config
        );
        return response.data.included;
    } catch (error) {
        if (error.response) {
            console.error("Response data:", error.response.data);
            console.error("Response status:", error.response.status);
            console.error("Response headers:", error.response.headers);

            if (error.response.status === 404) {
                return [];
            }
        } else if (error.request) {
            console.error("No response received:", error.request);
        } else {
            console.error("Request setup error:", error.message);
        }
        throw error;
    }
};

const contentResultsService = {
    getBookResultLists,
    getDocumentCover,
    getBookCover
}

export default contentResultsService;