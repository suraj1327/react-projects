import './Card.css';

const Card = (props) => {
    // This is a wrapper component for combining/merging common styles. In this case the div tag and few css.
    const classes = 'card '+ props.className;
    return(
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Card;