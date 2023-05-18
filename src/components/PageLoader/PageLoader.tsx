import React from 'react';
import { Rings } from  'react-loader-spinner';

const PageLoader = () => {
    return(
            <Rings
                height="100"
                width="100"
                color="#448AFF"
                radius="6"
                wrapperStyle={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100px",
                    height: "100px",
                }}
                visible={true}
                ariaLabel="rings-loading"
            />
    )
}

export default PageLoader;
