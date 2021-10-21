import Image from "next/image";
import styles from "../styles/components/Avatar.module.css";

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
            <div className={styles.avatarName}>
                <span className={styles.avatarTitle}>Luise Fialho</span>
                <span className={styles.avatarSubtitle}>Editora e Redatora</span>
            </div>
        </div>)
}

export default Avatar;