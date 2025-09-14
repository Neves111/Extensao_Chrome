document.addEventListener('DOMContentLoaded', async () => {
    const tabCountElement = document.getElementById('tab-count');
    try {
        const tabs = await chrome.tabs.query({ currentWindow: true });
        tabCountElement.textContent = tabs.length;
    } catch (error) {
        tabCountElement.textContent = 'N/A';
        console.error('Erro ao contar abas:', error);
    }

    const passwordOutput = document.getElementById('password-output');
    const generateButton = document.getElementById('generate-button');
    const copyButton = document.getElementById('copy-button');

    function generatePassword() {
        const length = 16;
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
        let password = "";
        for (let i = 0, n = charset.length; i < length; ++i) {
            password += charset.charAt(Math.floor(Math.random() * n));
        }
        passwordOutput.value = password;
    }

    generateButton.addEventListener('click', generatePassword);

    copyButton.addEventListener('click', () => {
        if (passwordOutput.value) {
            passwordOutput.select();
            document.execCommand('copy');
            copyButton.textContent = '✅';
            setTimeout(() => {
                copyButton.textContent = '📋';
            }, 1500);
        }
    });

    generatePassword();
});