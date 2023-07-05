
import { connect } from "react-redux";
import style from './Favorites.module.css'
import { Link } from "react-router-dom";

function Favorites({myFavorites}) {
    console.log(myFavorites);
    return (
        < >
        <Link className={style.home} to="/home">Back</Link>
        <div className={style.container}>
        
            
            <h2 className={style.title}>My Favorites</h2>
            
            {
                myFavorites?.map((character) => (
                    <div className={style.characters}>
                        <h2>{character.name}</h2>
                        <h2>{character.gender}</h2>
                        <img src={character.image} alt={character.name} />
                    </div>
                ))
            }
        </div>
        </>
    );
}

export function mapStateToProps(state) {
    return {
        myFavorites : state.myFavorites
    }
}



export default connect(mapStateToProps)(Favorites);