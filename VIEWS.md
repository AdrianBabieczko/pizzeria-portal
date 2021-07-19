# Dashboard
- `/`
  - statystyki dzisiejszych zamówień (zadalne i lokalne)
  - lista rezerwacji i eventow zaplanowanych na dzisiaj

# Logowanie
- `/login`
  - pola na login i hasło
  - guzik do zalogowania (link do dashboardu)

# Widok dostepości stolikow

- `/tables`
  - wybor daty i godziny
  - tabela z lista rezerwacji oraz wydarzen
    - kazda kolumna = 1 stolik
    - kazdy wierwsz = 30 minut
    - ma przypominac widok tyhgodnia kalendarzu google gdzie w kolmnuach zmiast dni sa rozne stoliki
    - po kliknieciu rezerwacji lub eventru przechodzimy na strone details

- `/tables/booking/:id`
  - zawiera wszystkie infortmacje dot zerwacji
  - umozliwia edycje i zapisanie zmian

- `/tables/booking/new`
  - analogicznie do powyzszej ale bez pocztkowych informacji

- `/tables/events/:id`
  - analogicznie do powyzszej ale dla eventow

- `/tables/events/new`
  - analogicznie do powyzszej ale dla eventow  bez poczatkowych informacji

# Widok kelnera

- `/waiter`
  - tabela
    - w wierszach stoliki
    - w kolumnach rozne info (status, czas od ostatniej aktywnosci)
    - w ostatniej kolumnie dostepne akje dla danego stolika
- `/waiter/order/new`
  - numer stolika (edytowalne)
  - menu produktow
  - opcje wybranego produku
  - zamowienie (zamowiene produkty z opacjami i cena)
  - kwota zamowienia
- `/waiter/order/:id`
  - jak powyzsza

# Widok kuchni

- `/kitchen`
  - wyswietlac liste zamowien w kolejnosci ich zlaozenia
  - lista musi zawierac:
    - nr stolika (lub zamowienia zdalnego_)
    - pelne info dot. zamopwinych dań
  - na liście musi byc mozliwosc oznaczenia zamowienia jako zrealizowane
