import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="item-card-info" style={style}>
            <p className="item-card-title">{props.title}</p>
            <p className="item-card-sub-title">{props.subTitle}</p>
            { props.link2 && <span><a className="item-card-sm-text" href={props.link2} target="_blank" rel="noopener noreferrer" >Go to Site</a><br/></span>}
            { props.link && <span><a className="item-card-sm-text" href={props.link} target="_blank" rel="noopener noreferrer" >View GitHub</a><br/></span>}
            <p className="item-card-sm-text">{props.content}</p>
        </animated.div>
    );
}

export default CardInfo;