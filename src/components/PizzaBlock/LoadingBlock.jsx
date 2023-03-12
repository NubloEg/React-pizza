import React from 'react';
import ContentLoader from "react-content-loader";

const LoadingBlock = () => {
    return (
        <ContentLoader
            className={"pizza-block"}
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"

        >
            <circle cx="130" cy="132" r="120" />
            <rect x="0" y="271" rx="6" ry="6" width="280" height="26" />
            <rect x="1" y="310" rx="6" ry="6" width="280" height="84" />
            <rect x="0" y="408" rx="6" ry="6" width="91" height="31" />
            <rect x="137" y="402" rx="20" ry="20" width="140" height="41" />
        </ContentLoader>
    )
};

export default LoadingBlock;