import { connect } from "react-redux";
import { useEffect, useState } from "react";
import styles from './Card.module.css';
import { Link } from "react-router-dom";
import { addFavorites, removeFavorites } from "../redux/actions";


// function Card ({ name, species, gender, image, onClose, detailId, removeFavorites, addFavorites, myFavorites }) {
function Card (props) {
  console.log(props);

  const [ isFav, setIsFav ] = useState(false);

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  function handleFavorite() {
    if(isFav) {
      setIsFav(false); 
      //Le pasamos el id del personaje
      props.removeFavorites(props.id)
    }
    else {
      setIsFav(true);
      props.addFavorites(props)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.contentAll}>
        <div className={styles.front} >
          <img src={props.image} alt={props.name} className={styles.image}  />
        </div>
        <div className={styles.back}>
          <h2 className={styles.title}>Name: {props.name}</h2>
          <h2 className={styles.title}>Specie: {props.species}</h2>
          <h2 className={styles.title}>Gender: {props.gender}</h2>
        </div>
        <div className={styles.btnContainer}>
          <div>
            <button onClick={() => props.onClose(props.id)} className={styles.btn} >Delete</button>
          </div>
          <Link to={`/detail/${props.detailId}`} >
            <button className={styles.btn}>View more</button>
          </Link>
        </div>
       
      </div>
    </div>
  )
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    addFavorites : function (character) {
      dispatch(addFavorites(character))
    },
    removeFavorites: function(id) {
      dispatch(removeFavorites(id))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);