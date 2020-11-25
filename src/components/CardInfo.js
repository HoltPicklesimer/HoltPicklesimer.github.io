import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="item-card-info" style={style}>
            <p className="item-card-title">{props.title}</p>
            <p className="item-card-sub-title">{props.subTitle}</p>
            { props.link && <a className="item-card-sm-text" href={props.link} target="_blank" rel="noopener noreferrer" >View</a>}
            <p className="item-card-sm-text">{props.content}</p>
        </animated.div>
    );
}

export default CardInfo;