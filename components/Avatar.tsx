import Image from "next/image";
import styles from "../styles/components/Intro.module.css";

type AvatarProps = {
    size?: string;
    subtitle?: boolean;
}

const Avatar = ({ size, subtitle = false }: AvatarProps) => {

    function renderSize(size) {
        switch (size) {
            case "p":
                return { image: 32, text: "h3" }
            default:
                return { image: 48, text: "h4" }
        }
    }

    return (
        <div
            className={styles.avatar}
        >
            <Image
                src="/avatar.png"
                alt="Luise Fialho"
                width={renderSize(size).image}
                height={renderSize(size).image} />
            <div>
                <h4>Luise Fialho</h4>
                {subtitle && <span className="comment">Editora e Redatora</span>}
            </div>
        </div>)
}

export default Avatar;