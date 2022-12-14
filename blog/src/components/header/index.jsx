import {Head} from "./style";
import img from "../../img/amongus.jpg"

function Header(){
    return(
        <Head>
            <div className="divUm">
                <div className="divDois">
                    <div className="divTres">
                        <div className="dadosDePerfil">
                            <img src={img} alt="" />
                            <p>Matheus Gomes</p>
                        </div>
                    </div>
                    <button>Logout</button>   
                </div>
            </div>
        </Head>
    )
}

export default Header