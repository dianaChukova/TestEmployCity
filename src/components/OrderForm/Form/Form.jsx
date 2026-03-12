import { useState } from 'react';
import styles from './Form.module.scss';
import "../../../styles/base/base.scss"
import fileIcon from '../../../assets/images/icons/fileIcon.svg'; 

const Form = () => {
    const [rangeValue, setRangeValue] = useState(75);
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [selectedType, setSelectedType] = useState('Выберите тип системы');

    const selectOptions = [
        'Sed ut perspiciatis', 'Nemo enim ipsam', 'Et harum quidem', 
        'Temporibus autem', 'Itaque earum rerum'
    ];

    return (
        <section className={styles.form__order}>
                <form className={styles.form}>
                    <div className={styles.form__row}>
                        <div className={styles.form__selectWrapper}>
                            <div 
                                className={ `${styles.form__select} ${isSelectOpen ? styles['select--open'] : ''}`}
                                onClick={() => setIsSelectOpen(!isSelectOpen)}
                            >
                                {selectedType}
                            </div>
                            {isSelectOpen && (
                                <ul className={styles.form__selectList}>
                                    {selectOptions.map((opt) => (
                                        <li key={opt} onClick={() => {
                                            setSelectedType(opt);
                                            setIsSelectOpen(false);
                                        }}>{opt}</li>
                                    ))}
                                </ul>
                            )}
                            <input type="hidden" name="system_type" value={selectedType} />
                        </div>

                        <input type="email" name="email" placeholder="Ваш e-mail" className={styles.form__input} required />
                        <input type="text" name="name" placeholder="Ваше имя" className={styles.form__input} required />
                    </div>

                    <div className={styles.form__row}>
                        <div className={styles.form__rangeWrapper}>
                            <div className={styles.form__rangeLabel}>
                                <span>Sed ut perspiciatis, unde omnis iste natus</span>
                                <span className={styles.form__rangeValue}>{rangeValue} %</span>
                            </div>
                            <input 
                                type="range" 
                                name="range_value"
                                min="0" 
                                max="100" 
                                value={rangeValue}
                                className={styles.form__range}
                                onChange={(e) => setRangeValue(e.target.value)}
                            />
                        </div>

                        <div className={styles.form__fileWrapper}>
                            <label htmlFor="file-upload" className={styles.form__fileLabel}>
                                <img src={fileIcon} alt="" />
                                ПРИКРЕПИТЬ ФАЙЛ
                            </label>
                            <input id="file-upload" type="file" name="file" className={styles.form__fileInput} />
                        </div>
                    </div>

                    <button type="submit" className={styles.form__submitBtn}>ОТПРАВИТЬ</button>
                </form>
        </section>
    );
};

export default Form;
