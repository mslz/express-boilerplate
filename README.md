# express-boilerplate

Minimalny projekt Express.js z formularzem pod `/` i endpointem `POST /api/messages`.

## Wymagania

- Node.js w wersji 18 lub nowszej
- npm (instalowany razem z Node.js)

## Instalacja

W katalogu projektu zainstaluj zaleznosci:

```bash
npm install
```

## Uruchomienie serwera

Uruchom serwer produkcyjnie:

```bash
npm start
```

Lub uruchom tryb deweloperski, ktory automatycznie restartuje serwer po zmianie pliku:

```bash
npm run dev
```

Po zobaczeniu komunikatu `Serwer dziala na http://localhost:3000` otworz w przegladarce adres `http://localhost:3000`.

Wyslana wiadomosc zostanie wypisana w konsoli serwera, a odpowiedz API pojawi sie pod formularzem.
