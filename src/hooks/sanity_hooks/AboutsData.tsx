import React, { useState, useEffect } from "react";
import { client } from "../../client";
import About from "../../interfaces/About";

const useAbouts = () => {
    const [abouts, setAbouts]: [About[], React.Dispatch<React.SetStateAction<About[]>> ] = useState([] as About[]);

    useEffect(() => {
        
        const query = '*[_type=="abouts"]';

        _AboutAPI.fetch(query, setAbouts);
        
    }, []);

    return abouts;
};

const _AboutAPI = {
    fetch: (query: string, setState: Function): void => {

        client.fetch(query).then((data) => {

            const filteredData = data.map((about: About) => { 
                const { title, description, imageUrl } = about;
                return { title, description, imageUrl };
             });

            setState(filteredData);
        });
    }
};

export default useAbouts;