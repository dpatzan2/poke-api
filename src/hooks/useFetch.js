import React, { useEffect, useState } from 'react'
import axios from "axios";
import Swal from "sweetalert2";

export const useFetch = (url) => {

    const [poke, setPoke] = useState([])

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        }); 

        // const resp = await fetch(url);  
        // const data = await resp.json();

        axios.get(url).then(async(response) => {
            for (let i = 0; i < response.data.results.length; i++) {
              axios.get(response.data.results[i].url).then(async(result) => {
                //console.log(result)
                const data = await result
                for (let i = 0; i < data.length; i++) {
                    setState({
                      data: data[i],
                      isLoading: false,
                      hasError: null,
                    });
                }
                console.log(data)
                
                setPoke(...poke, data)
                console.log('leggue')
                console.log(state)
              })
            }
        }).catch(async (error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error,
            });
        })

    }
 
    useEffect(() => {
        getFetch();
    }, [url])
    

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
}
