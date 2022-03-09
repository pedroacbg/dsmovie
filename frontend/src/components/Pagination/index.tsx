import {ReactComponent as Arrow} from 'assets/img/arrow.svg'
import './styles.css'

function Pagination() {

    return (
        <div className="zttmovie-pagination-container">
            <div className="zttmovie-pagination-box">
                <button className="zttmovie-pagination-button" disabled={true} >
                    <Arrow />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="zttmovie-pagination-button" disabled={false} >
                    <Arrow className="zttmovie-flip-horizontal" />
                </button>
            </div>
        </div>
    );

}

export default Pagination;