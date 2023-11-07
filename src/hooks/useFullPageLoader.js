import React, {useState} from 'react';
import LoaderSpiner from '../components/LoaderSpinner';

 const useFullPageLoader = () => {
     const [loading, setLoading] = useState(false);
    return [
        loading ? <LoaderSpiner/> : null,
        () => setLoading(true), //Show Loader
        () => setLoading(false) //Hide Loader
    ];
};
export default useFullPageLoader