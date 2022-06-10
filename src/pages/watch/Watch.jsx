import { ArrowBackIosOutlined } from "@material-ui/icons"
import "./watch.scss"

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackIosOutlined />
                Home
            </div>
            <video className="video" autoPlay progress controls src="https://v16-webapp.tiktok.com/008a2d032f2d77315adf8143fb2dd9ad/62a07917/video/tos/useast2a/tos-useast2a-pve-0037-aiso/818c502438924b22aac875afd17d634e/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=3238&bt=1619&btag=80000&cs=0&ds=3&ft=eXd.6Hk_Myq8Z~Doawe2NxCQml7Gb&mime_type=video_mp4&qs=0&rc=ZGg8ZWRpPDo7OTxlO2U0M0BpanU0OGU6Zmh2PDMzZjgzM0AyYDAtNmMzNjAxMDQzMjMvYSNnMy5tcjQwbG9gLS1kL2Nzcw%3D%3D&l=20220608042507010245020056277C1C7F">

            </video>
        </div>
    )
}