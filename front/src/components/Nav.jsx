import SearchBar from './SearchBar'

import style from './Nav.module.css';
import { Link, useNavigate } from "react-router-dom";

export default function Nav(props) {
    const navigate = useNavigate();
    const {onSearch} = props;

    const handleClick = ()=> {
        navigate('/');
    }

    return(
        
        <div className={style.container}>
            
            <div className={style.nav}>
                <Link className={style.elemento1} to="/home">Home</Link>
                <br />
                <Link className={style.elemento2} to="/about">About</Link>
                <br />
                
              
                
            </div>
            
            
            
            <SearchBar onSearch={onSearch}/>
            
        </div>
        
    )

}