import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Nav(props){
    const navigate = useNavigate();

    function navigateHandler(){
        navigate('/AllSeasons')
    }
    return(
        <div>
            <header class="row align-center">
            <div class="col">
                <nav class="navbar gap-2">
                    <h2>Logo</h2>
                    <ul class="navbar-menu remove-tablet">
                        <li>
                        <NavLink
                        to="/spring"
                        className={({isActive})=>
                        isActive ? "active" :undefined
                        }
                        end
                        >Spring</NavLink>
                        </li>



                        <li>
                        <NavLink
                        to="/summer"
                        className={({isActive})=>
                        isActive ? "active" :undefined
                        }
                        end
                        >Summer</NavLink>
                        </li>

                        
                        <li>
                        <NavLink
                        to="/fall"
                        className={({isActive})=>
                        isActive ? "active" :undefined
                        }
                        end
                        >Fall</NavLink>
                        </li>


                        <li>
                        <NavLink
                        to="/winter"
                        className={({isActive})=>
                        isActive ? "active" :undefined
                        }
                        end
                        >Winter</NavLink>
                        </li>
                        <li><button onclick={navigateHandler} class="btn">All Seasons</button></li>
                    </ul>
                </nav>
            </div>
        </header>
        </div>
    );
}