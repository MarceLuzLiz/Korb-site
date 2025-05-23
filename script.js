// Data alvo: 25 de março de 2005 às 8:00
const targetDate = new Date('2025-05-23T11:00:00');

function updateCountdown() {
    const now = new Date();
    const difference = targetDate - now;
    
    if (difference <= 0) {
        // Contagem regressiva terminou
        document.getElementById('title').textContent = 'Novidade!';
        document.getElementById('countdown').classList.add('hidden');
        document.getElementById('novidade').classList.remove('hidden');
        return;
    }
    
    // Calcular dias, horas, minutos e segundos
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    // Atualizar a exibição
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Atualizar a contagem regressiva imediatamente e a cada segundo
updateCountdown();
setInterval(updateCountdown, 1000);
