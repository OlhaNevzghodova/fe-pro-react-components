import PropTypes from "prop-types";
import React from "react";


const Article = ({title, text}) => {
    return <li className="list__item">
        <h2>{title}</h2>
        <p>
            {text}
        </p>
    </li>
};

Article.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
}

export default Article;