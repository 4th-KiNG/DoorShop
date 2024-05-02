'use client'
import styles from './Callback.module.scss'
import { useRef, FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';

const Callback = () => {
    const SendText = () => {
        return (
            <>
                {success ? <p className={styles.SendBtn_Success}>Отправлено ✓</p> : <p className={styles.SendBtn_UnSuccess}>Заполните все поля!</p>}
            </>
        )
    }
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [area, setArea] = useState("")
    const [success, setSuccess] = useState(true)
    const [sendSuccess, setSendSuccess] = useState(false)
    const handleName = (e: any) => setName(e.target.value)
    const handlePhone = (e: any) => setPhone(e.target.value)
    const handleArea = (e: any) => setArea(e.target.value)
    const form = useRef<HTMLFormElement | null>(null)
    const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Чтобы предотвратить перезагрузку страницы
        if (name != "" && phone != "" && area != ""){
            if (form.current) {
                await emailjs
                .sendForm(
                    'service_59sojxu',
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
            setSendSuccess(true)
            setSuccess(true)
            setPhone("")
            setName("")
            setArea("")
        }
        else{
            setSendSuccess(true)
            setSuccess(false)
        }
    }
    return (
        <div className={styles.Callback} id='callback'>
            <h1 className={styles.Callback_Title}>Свяжитесь с нами</h1>
            <form ref={form} className={styles.Callback_Form} onSubmit={sendEmail}>
                <input type="text" id='name-input' onChange={handleName} value={name} placeholder='ФИО' name='username' className={styles.Callback_Input} />
                <input type="phone" id='phone-input' onChange={handlePhone} value={phone} placeholder='Телефон' name='userphone' className={styles.Callback_Input} />
                <div className={styles.Callback_Form_Description}>
                    <p>Описание заявки</p>
                    <textarea name="message" onChange={handleArea} value={area} className={styles.Callback_Form_Description_Area} style={{width: "100%"}} id="area"></textarea>
                </div>
                <div className={styles.SendBtn}>
                    <input className={styles.Callback_Form_Send} type='submit' value="Отправить"/>
                    {sendSuccess && <SendText></SendText>}
                </div>
            </form>
        </div>
    );
}
 
export default Callback;