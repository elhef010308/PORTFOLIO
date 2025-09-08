function waitForSecretButton1() {
    const interval = setInterval(() => {
        const secretButton = document.querySelector('.secret-key-button');

        if (secretButton) {
            clearInterval(interval);

            const clickButton = [];

            function handleClick(className) {
                clickButton.push(className);

                if (clickButton.length === 1 &&
                    clickButton[0] === 'secret-key-button'
                ) {
                    window.location.href = 'http://localhost:5173/PORTFOLIO/#/secret'
                }
            }

            secretButton.addEventListener('click', () => handleClick('secret-key-button'));
        }
    }, 100); // vérifie toutes les 100ms
}


waitForSecretButton1();