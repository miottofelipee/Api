import estilo from './dashbutton.module.css'

const DashButton = ({title, fn, cor}) => {
    return(
        <button className={estilo.buttonreceita} onClick={fn} style={{backgroundColor :  cor}}>{title}</button>
    )
}

export default DashButton