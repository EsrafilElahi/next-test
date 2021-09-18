import React, { useState } from 'react'
import styles from '../styles/Home.module.css';



function DatePicker() {

    const [date, setDate] = useState({ year: null, month: null, day: null })

    const handleDateChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setDate({ [name]: value })
    }

    return (
        <form className={styles.date_picker_form}>

            <div className={styles.date_picker_container}>
                <input
                    type='number'
                    placeholder='سال'
                    className={styles.date_picker_input}
                    name='year'
                    value={date.year}
                    onChange={handleDateChange}
                />

                {/* {`btn btn-primary ${styles.btn} ${className}`} */}

                <input
                    type='number'
                    placeholder='ماه'
                    className={styles.date_picker_input}
                    name='month'
                    value={date.month}
                    onChange={handleDateChange}
                />

                <input
                    type='number'
                    placeholder='روز'
                    className={styles.date_picker_input}
                    name='day'
                    value={date.day}
                    onChange={handleDateChange}
                />
            </div>

            <button className={styles.date_picker_btn}>ارسال</button>

        </form>
    )
}

export default DatePicker
