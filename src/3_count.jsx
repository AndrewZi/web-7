import React, { useState } from 'react';

function Open3() {
    const [counter, setCounter] = useState('');

    const addDelta = async () => {
        try {
            const countValue = encodeURIComponent(counter);
            const formData = new URLSearchParams();
            formData.append('count', countValue);
        
            const response = await fetch('http://localhost:8081/get', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData.toString()
            });
        
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Произошла ошибка при получении данных');
        }        
    }

    const returnCounter = async() => {
        try {
            const response = await fetch('http://localhost:8081/get', {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const text = await response.text();
            alert(text);
        } catch (error) {
            console.error('Error:', error);
            alert('Произошла ошибка при получении данных');
        }
    }

    return (
        <div>
            <div>
                <label htmlFor="name" className="style">Увеличение:</label>
                <input type="number" id="name" className="style" onChange={(e) => setCounter(e.target.value)}></input>
                <button className="style" onClick={addDelta}>Применить</button>
            </div>
            <button className="style" onClick={returnCounter}>Вывести счётчик</button>
        </div>
    )
}

export default Open3;