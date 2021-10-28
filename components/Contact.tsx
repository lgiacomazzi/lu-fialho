import Link from "next/link"
import { useState } from "react";
import styles from "../styles/components/Contact.module.css";
import Button from "./Button";
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
    const [data, setData] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(values => ({ ...values, [name]: value }))
        console.log(data)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
        alert("Obrigado pela sua mensagem! :)");
    }

    return (
        <form data-submitted={isSubmitted}>
            <input type="text" name="name" placeholder="Seu nome" onChange={handleChange} />
            <input type="mail" name="mail" placeholder="Seu e-mail" onChange={handleChange} />
            <textarea name="message" placeholder="Sua mensagem" onChange={handleChange} />
            <Button onClick={handleSubmit}>Enviar</Button>
        </form>
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