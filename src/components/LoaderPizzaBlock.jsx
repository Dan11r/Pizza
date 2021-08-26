import React from "react"
import ContentLoader from "react-content-loader"

const LoaderPizzaBlock = (props) => (
    <ContentLoader
        speed={1}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#dedede"
        foregroundColor="#fff"
        className="pizza-block"
        {...props}
    >
        <circle cx="130" cy="130" r="130" />
        <rect x="-2" y="269" rx="6" ry="6" width="280" height="24" />
        <rect x="-1" y="311" rx="9" ry="9" width="280" height="83" />
        <rect x="3" y="420" rx="9" ry="9" width="89" height="26" />
        <rect x="128" y="413" rx="23" ry="23" width="151" height="44" />
    </ContentLoader>
)

export default LoaderPizzaBlock
