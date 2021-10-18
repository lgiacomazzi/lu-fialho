import Link from "next/link"
import styles from "../styles/components/Contact.module.css";
import Icon from "./Icon";

const ContactLink = ({ children, name, url }) => {
    return (
        <Link href={url}>
            <a className={styles.contactLink}>
                <div className={styles.contactLinkHeader}>
                    <h5>{name}</h5>
                    <Icon icon="navigate" size={16} />
                </div>
                <span className="comment">{children}</span>
            </a>
        </Link>
    )
}

const ContactForm = () => {
    return (
        <>

        </>
    )
}

const Contact = () => {
    return (
        <div className="container">
            <div className={styles.contactHeader}>
                <h2>Contato</h2>
            </div>
            <p>Vamos conversar?</p>
            <p>Você pode me encontrar em qualquer um destes canais:</p>
            <ContactLink name="E-mail" url="mailto:luisefialho@gmail.com">luisefialho@gmail.com</ContactLink>
            <ContactLink name="Linkedin" url="https://linkedin.com/in/luisefialho">linkedin.com/in/luisefialho</ContactLink>
            <ContactLink name="Medium" url="https://luisef.medium.com">luisef.medium.com</ContactLink>
            <p>Se preferir, envie sua mensagem por aqui mesmo.</p>
            <ContactForm />
        </div>
    )
}

export default Contact;