function Open1() {
    const sayHello = async () => {
        try {
            const response = await fetch('http://localhost:8082/get', {
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
            <button className="style" onClick={sayHello}>Привет!</button>
        </div>
    );
}

export default Open1;