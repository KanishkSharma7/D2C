import React, {useEffect} from 'react'

const CollectionsDetails = (props) => {
    props.set(true);
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <>
            Coming Soon
        </>
    );
};
export default CollectionsDetails