import estilos from "./../dashcard/dashcard.module.css"

const DashCard = ({title, value, color}) => {
    return(
        <div className={estilos.card} style={{backgroundColor: color}}>
            <p className={estilos.cardTitle}>{title}</p>
            <p className={estilos.cardValue}>R$ {value}</p>
        </div>
    )
}

export default DashCard;