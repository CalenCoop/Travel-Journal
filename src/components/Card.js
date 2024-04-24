import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Card(props){
    return(
        <div className="card">
            <div className="card-img">
                <img src={props.imageUrl} alt="location photo" />
            </div>
            <div className="card-info">
                <div className="card-location">
                    <FontAwesomeIcon icon ={faLocationDot} className="location-dot" />
                    <span>{props.location}</span>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 className= 'card-title'>{props.title}</h2>
                <h3 className="card-dates">{props.startDate} - {props.endDate}</h3>
                <p className= 'card-desc'>{props.description}</p>
            </div>
        </div>
    )
}