import React, { useState } from 'react';

function Open2() {
    const [name, setName] = useState('');

    const sayHelloMe = async () => {
        try {
            const response = await fetch(`http://localhost:8083/api/user?name=${encodeURIComponent(name)}`, {
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
    };

    return (
        <div>
            <div>
                <label htmlFor="name" className="style">Имя:</label>
                <input type="text" id="name" className="style" onChange={(e) => setName(e.target.value)}></input>
            </div>
            <button className="style" onClick={sayHelloMe}>Привет!</button>
        </div>
    )
}

export default Open2;