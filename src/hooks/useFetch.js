import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [loading, setLoading] = useState();
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        setLoading("Loading..");
        setData(null);
        setError(null);
        const source = axios.CancelToken.source();
        axios.get('/data/v1/teams',{
        })
            .then((res) => {
                setLoading(false);
                if (res.statusText === "OK") {
                    res.data && setData(res.data.data);
                }
                else{
                    console.log(res);
                }
            })
            .catch((err) => {
                setLoading(false);
                setError(err);
            });
        return () => {
            source.cancel();
        };
    }, [url]);
    return { data, loading, error };
};

export default useFetch;