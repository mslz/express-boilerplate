const form = document.querySelector('#message-form');
const response = document.querySelector('#response');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const message = new FormData(form).get('message');

  response.textContent = 'Wysyłanie...';

  try {
    const result = await fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    const data = await result.json();

    if (!result.ok) throw new Error(data.error);

    response.textContent = data.message;
    form.reset();
  } catch (error) {
    response.textContent = error.message || 'Nie udało się wysłać wiadomości.';
  }
});
