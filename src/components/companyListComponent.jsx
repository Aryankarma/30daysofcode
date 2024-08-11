import styles from "../styles/components/companyListComponent.module.scss";    
import shell from "../assets/images/shells.png"
import smartfinder from "../assets/images/smartfinder.png"
import zoomer from "../assets/images/zoomer.png"
import artvenue from "../assets/images/artvenue.png"
import kontrastr from "../assets/images/kontraster.png"
import wavesmarathon from "../assets/images/wavesMarathon.png"

function companyListComponent() {
    return <div className={styles.companyList}>
        <img src={ shell } alt="" />
        <img src={smartfinder} alt="" />
        <img src={zoomer} alt="" />
        <img src={artvenue} alt="" />
        <img src={kontrastr} alt="" />
        <img src={wavesmarathon} alt="" />
    </div>
}

export default companyListComponent;