import Image from "next/image";
import styles from "../styles/components/Intro.module.css";

type AvatarProps = {
    size?: number;
    picture?: boolean;
}

const Avatar = ({ picture = true, size = 60 }: AvatarProps) => {
    return (
        <div
            className={styles.avatar}
        >
            {picture && <Image
                priority
                src="/avatar.png"
                alt="Luise Fialho"
                width={size}
                height={size}
                objectFit="cover" />}
            <div>
                <h3>Luise Fialho</h3>
                <span>Editora e Redatora</span>
            </div>
        </div>)
}

export default Avatar;