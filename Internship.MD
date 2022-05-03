## Internship Program

De create un panou de administare pentru a gestiona utilizatorii si articolele postate de ei.

### Librarii care vor fi folosite

- typescript - pentru tipizarea codului
- axios - pentru a face request-uri catre API-ul de pe server
- json-server - pentru a crea un server local cu baza de date
- react-router-dom - pentru a folosi rutarea
- rechart - pentru a folosi grafice

### Cerinte

- Layout-ul trebuie sa fie simplu si elegant, pentru pagina de logare si inregistrare formularele vor fi centrate fara menu(https://prnt.sc/l6JwDmFLDbUu)
- Layout-ul pentru panou de administrare trebuie sa contina un menu in partea dreapta, un topbar cu userul logat si un container pentru restul rutelor din menu(https://prnt.sc/-4BHnUheMNyW)
- Nu exista limitari la design, fiecare poate sa aiba un design propriu, ca recomandare se poate de luat de pe Figma Community(https://prnt.sc/I8IE8j7qo0_n)

#### Inregistrare

Utilizatorul trebuie sa se poata inregistra in aplicatie. Vor fi folosite urmatoarele campuri:

- Nume(input[type="text"]) - numele utilizatorului
- Prenume(input[type="text"]) - prenumele utilizatorului
- Email(input[type="email"]) - email-ul utilizatorului
- Gender(select) - Masculin, Femenin, Ma abtin
- Parola(input[type="password"]) - parola utilizatorului
- Confirmare parola(input[type="password"]) - confirmarea parolei
- Checkbox(input[type="checkbox"]) - Sunt deacord cu prelucrarea datelor personale
- Buton(button) - Buton de inregistrare

Dupa ce utilizatorul completeaza datele, se face un request cu datele din forma de mai sus. POST - /users

Exemplu - https://prnt.sc/hLjreHI9fGJp

#### Login

Logare in aplicatie. Utilizatorul trebuie sa introduca email-ul si parola dupa care se face un request GET - /users?email=email&password=parola
Daca utilizatorul este in baza de date locala, se va loga in aplicatie. Daca nu, apare o eroare ca nu a fost gasit si ii propune sa se inregistreze.
Daca utilizatorul a fost gasit, se va adauga in localStorage `userId=value` si se va redirectiona la pagina principala. Verificare daca utilizatorul exista in BD se va face dupa acest variabila `userId` cu GET - /users/{id}. Dupa verificare, datele utilizatorului se vor adauga intr-un context global si se va afisa numele si prenumele in topbar la layout.

Campurile de logare sunt:

- Email(input[type="email"]) - email-ul utilizatorului
- Parola(input[type="password"]) - parola utilizatorului

Exemplu - https://prnt.sc/Wst6H81vFLHQ

#### Panoul de administrare

Panoul va contine 3 compartimente: Users, Posts si Dashboard.

- Utilizatorii sunt afisati in tabel cu id, nume, prenume, email si restul campurilor inafara de passwords.
- Posts sunt afisate in tabel cu id, titlu, data si restul campurilor.
- Dashboard contine un grafic cu numarul de posts si users.

#### Users

Users va contine urmatoarele cerinte:

1. Afisarea utilizatorilor in tabel cu o coloana care contine 2 butoane de edit si delete.
2. Asupra tabelului se va afisa un buton de adaugare.
3. La accesarea de adaugare, se va afisa un modal cu formularul de mai sus:

- Toate campurile de la inregisrare sunt afisate(fara parola si id)
- Rolul(select) - Moderator sau administrator
- La confirmare, se va face un POST - /users

4. La accesarea de edit, se va afisa un modal cu formularul de mai sus:

- Toate campurile de la inregisrare sunt afisate(fara parola si id)
- Rolul(select) - Moderator sau administrator
- La confirmare, se va face un PUT - /users/{id}

5. La accesarea de delete, se va face un DELETE - /users/{id}
6. Butonul de adaugare, stergere si editare este accesibil doar pentru utilizatorii cu rolul de administrator.

De luat in calcul ca dupa DELETE, POST si PUT trebuie sa se mai faca un GET pentru a actualiza datele din tabel.
Exemplu - https://prnt.sc/F_LmpUfwnTLj

#### Posts

Posts va contine un grid cu cate 4 coloane, fiecare coloane e o postare care afiseaza datele din GET - `/posts`, la fel fiecare coloana are un buton de edit si delete.
Deasupra la grid va fi un button de adaugare. Adaugarea se face pe o pagina separata(`/posts/create`) cu un formularul ce contine urmatoarele campuri:

1. Titlu(input[type="text"]) - titlul postarii
2. Descriere(input[type="textarea"]) - descrierea postarii
3. Imagine(input[type="text"]) - un link de pe unsplash.com
4. Data(input[type="date"]) - data postarii
5. Utilizatorul - va fi ascuns dar cu valoarea utilizatorului logat (numele si prenumele)
6. Buton de adaugare - POST `/posts`

La accesarea de edit, se va face redirect catre `/posts/{id}/edit` unde se va afisa datele din GET - `/posts/{id}`:
La accesare delete se face doar un DELETE cu un modal de confirmare(ex. Sunteti siguri ca doriti sa stergeti postare?), si doar dupa confirmare se face un DELETE - `/posts/{id}`

#### Dashboard

Va contine un chart cu numarul de postari si users. Folositi rechart.js pentru a genera graficul.

#### Logout

- Sterge datele din localStorage si face redictionare la pagina de logare.

#### Components

Lista de componente necesare:

- Modal - pentru adaugarea si editare de utilizatori
- ConfirmationModal - pentru a confirma ca doriti sa stergeti ceva
- Button - de 2 tipuri, danger(cancel) si primary(pentru confirmare)
- Inputs - pentru formulare
- Card - pentru postari
- Table - pentru utilizatori si postari
- Chart - pentru dashboard
- Layout - pentru menu, topbar si container
- Alte componente necesare pentru a functiona aplicatia

#### Routarea

- /users - tabel cu users
- /posts - grid cu postari
- /posts/:id - pagina cu detaliile
- /posts/:id/edit - pagina de editare postari
- /posts/create - pagina de adaugare postari
- /dashboard - pagina de dashboard
- /login - pagina de login
- /register - pagina de inregistrare

#### Structure

- api/ - va contine fisiere cu request-uri
  - posts.ts - lista cu request-uri pentru postari
  - users.ts - lista cu request-uri pentru utilizatori
- components/ - va contine componentele necesare
  - Button.tsx - buton de 2 tipuri, danger(cancel) si primary(pentru confirmare)
  - ConfirmationModal.tsx - modal de confirmare
  - Input.tsx - inputuri
  - Layout.tsx - layout
  - Modal.tsx - modal
  - Table.tsx - tabel
  - Chart.tsx - chart
- features/ - va contine modulele cu functionalitati
  - users/
    - components/ - va contine componentele specifice acestul modul. ex. UserModalForm.tsx
      - UserModalForm.tsx - formularul de adaugare/editare utilizatori
    - pages/ - va contine paginele
      - Users.tsx - pagina cu users
  - posts/ - la fel ca in users
    - components/ - va contine componentele specifice acestul modul.
      - PostCard.tsx - card postare
    - pages/ - va contine paginele
      - Posts.tsx - pagina cu postari
  - auth/
- utils/ - va contine utilitatile necesare
- hooks/ - va contine hook-urile necesare
- styles/ - va contine stilurile necesare
- types/ - va contine tipurile necesare
- App.tsx - componenta principală
- routes.ts - lista cu rute
