'use client'
import styles from './Callback.module.scss'
import { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const Callback = () => {
    const form = useRef<HTMLFormElement | null>(null)
    const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Чтобы предотвратить перезагрузку страницы
    
        if (form.current) {
            await emailjs
            .sendForm(
                'service_3xbvbky',
                'template_lsq2fpd',
                form.current,
                {
                publicKey: '_gou7K9fSLK-5td8t'
                }
            )
            .then(
                (result) => {
                console.log('SUCCESS!', result.status, result.text);
                },
                (error) => {
                console.error('FAILED...', error.text);
                }
            );
        }
    }
    return (
        <div className={styles.Callback} id='callback'>
            <h1 className={styles.Callback_Title}>Свяжитесь с нами</h1>
            <form ref={form} className={styles.Callback_Form} onSubmit={sendEmail}>
                <input type="text" placeholder='ФИО' name='username' className={styles.Callback_Input} />
                <input type="phone" placeholder='Телефон' name='userphone' className={styles.Callback_Input} />
                <div className={styles.Callback_Form_Description}>
                    <p>Описание заявки</p>
                    <textarea name="message" className={styles.Callback_Form_Description_Area} style={{width: "100%"}} id=""></textarea>
                </div>
                <input className={styles.Callback_Form_Send} type='submit' value="Отправить"/>
            </form>
        </div>
    );
}
 
export default Callback;