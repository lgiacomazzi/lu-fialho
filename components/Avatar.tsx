import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles/components/Avatar.module.css";

type AvatarProps = {
    size?: number;
    picture?: boolean;
}

const Avatar = ({ picture = true, size = 60 }: AvatarProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
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
        </motion.div>)
}

export default Avatar;