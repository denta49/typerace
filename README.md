# Typerace Tonik Challenge

## Intro

Cześć! Poniżej znajdziesz dokładny opis tego, co zrobiłem, dlaczego, w jakim czasie, na czym się skupiałem i w jakim mniej więcej czasie. Poza tym na samym dole znajdziesz standardowe readme projektu. Postarałem się, żeby każdy wybór był uzasadniony i przemyślany. Jest to dość długie ale chciałem, żeby było wyczerpujące i żeby pokazać moje podejście do rozwiązywania zadań. Plus moim guilty pleasure to pisanie dokumentacji, więc starałem się tutaj dać z siebie wszystko :) Napisałem to po polsku, żeby lepiej oddać cały vibe.

## Step by step

### Krok 1: Przygotowanie środowiska kodowego

Tutaj skorzystałem z przygotowanego przez siebie wcześniej template, który zawiera:

- husky - stosuję prawie w każdym projekcie, aby pushowany kod był ustandaryzowany dla wszystkich w repo;
- eslnt + prettier - jw.;
- Typescript - nie piszę w React bez tego, uważam, że to dobrodziejstwo, z którego należy obficie korzystać;
- PhpStorm - pisałem w zwykłym IDE z copilotem, nie decydowałem się na Lovable ani Cursora zeby nie bylo za latwo i zeby nie generowac bezsenswonego boilerplatu
- użycie hooków i liststaged - podczas commita i pusha leci prettier write, eslint check i fix oraz tsc check - to gwarantuje, że nie wypchniemy błędów. Następnie należy dodać testy i można też dodać builda.

Swój template jedynie odświeżyłem, żeby był aktualny - nie wliczam tego w czas rozwiązania zadania - myślę, że każdy software house/agencja powinna taki mieć (przynajmniej taki standard mamy my w obecnym miejscu pracy).

### Krok 2: Wybór technologii backendowych (zakładając późniejszą skalowalność MVP)

- Supabse - wybrałem, ponieważ
  - jest tani przy skalowaniu (a w tym przypadku darmowy)
  - ma bardzo dobry UX, logi, dużo funkcjonalności przydatnych tutaj, np. realtime;
  - jest gotowy na łatwe skalowanie z next: np. Auth, mailingi, itd.
  - możemy wybrać umiejscowienie serwera co może byc korzystne w przypadku wymogów klienta
  - znam;
  - ma wsparcie AI, co przyspiesza workflow;
  - ma Edge Functions i ich logi
  - ma bardzo dobrą integrację z Next
  - odchodzi problem maitenance
- Vercel wybrałem ponieważ :
  - bezbolesny i bardzo szybki deployment Nextowych apek, połączenie z GitHub, załatwia nam CI/CD;
  - dostęp do logów;
  - ochrona przed botami i monitoring;
  - łatwe skalowanie;
  - płacimy jedną cenę za powyższe funkcjonalności co jest istotne przy MVP;
  - odchodzi problem maintenance - przy aktualziacjach Next/Reacta mamy to z głowy.

### Krok 3: Wybór dodatkowych technologii/frameworków/bibliotek frontendowych:

- zod - do walidacji danych przychodzących z backendu - szybkie, proste i skuteczne rozwiązanie (swoją drogą użyłem tego po raz pierwszy, więc też dużo się przy tym nauczyłem);
- react-query - ogranicza nadmiar kodu, super kontrola nad fetchowaniem i stanami;
- zustand - prosty store do zarządzania stanem gry; nie tworzymy wielkiej apki, więc to wystarcza (swoją drogą również użyłem tego po raz pierwszy, więc dużo się przy tym nauczyłem);
- shadnui - gotowe komponenty, ładne, dobry performance i accesibility, dobra dokumentacja i nieograniczona rozbudowa

### Krok 4: Analiza zadania i planowanie

To zajęło mi najwięcej czasu. Rozwiązuje zadania w taki sposób, że najpierw bardzo dokładnie planuję zarówno UU, komponenty, ich budowę, nazwy, funkcje, cały backend i architekturę, a dopiero potem siadam do pisania kodu - ten ostatni etap jest wtedy najprostszy i najbardziej przemyślany, dzięki czemu w dużej mierze mogę go wygenerować.

### Krok 5: Implementacja

#### Postawienie backendu

- Zacząłem od postawienia Supabase, podłączenia do projektu, stworzenia tabel i wypełnienia ich przykładowymi danymi oraz dodania najprostszych RLS.
- następnie podłączyłem Vercela i domenę, żeby od razu móc testować wszystkie rzeczy również w środowisku produkcyjnym i nie mieć potem niespodzianek.

#### Dodanie typów

- zazwyczaj projekt zaczynam od dodania wszystkich potrzebnych typów, żeby już podczas dalszego kodowania wszystko było safe.

#### Dodanie placeholderów fetcherów, hooków react-query, storsów, utilsów

- według swojego planu dodaję kolejne elementy z placeholderami, tak żeby trzymać się planu i żeby się to nie rozrastało. Potem po prostu będę wypełniał wszystko kodem, ale już odpowiednio pospinanym.

#### Dodanie UI

- teraz zaczynam dodawać UI i wszystko układać, a następnie podłączać wszystko do wcześniej stworoznych hooków. Ogólnie staram się w 100% rozdzielać logikę od UI i od typów oraz wszystko tak pospinać, żeby mieć maksymalne wykorzystanie DRY, czasami kosztem KISS. Robię również dużo plików, żeby SRP było zachowane.

#### Wypełnianie logiki

- to ten etap, gdy w zasadzie cała struktura projektu jest już całkowicie gotowa i pozostaje wypełnienie logiki. Zakładam takie podejście, że jeżeli wymyśliłem wszystko od początku do końca, to teraz mogę posłużyć się AI, żeby ten cały boilerplate porządnie wypełnić. Robię to w taki sposób, że gdy nie krozystam z Cursora czy Lovable, mam założony projekt w GPT i tam mam bardzo dokładny opis całej apki. I wtedy po kolei bardzo dokładnie opisując, jak ma działać logika każdego komponentu/hooka itd proszę go o wygenerowanie kodu. Następnie kod sprawdzam, zmieniam po swojemu w paru miejscach itd. i dodaję do repo. Dlatego też nie za bardzo mogłem oznaczyć, które miejsca zostały wygenerowane przez AI tak jak w opisie zadania, ponieważ jest to w dużej mierze mix. Ogólnie boilerplate głównie generowany jest przez AI, ale fixy, nazwy, struktura itd. to moja robota.

## Co udało mi się zrobić a co nie

_- Real-time updated results and player stats. When a player joins a competition he/she should be shown in the main player's table with other currently playing contestants._ **Tak** - po wejściu dwóch graczy i odświeżeniu oraz zaczęciu pisania widzimy dwóch graczy w tabelce. Niestety jednak po wejściu tak po prostu nie widzimy wszystkich od razu.

_-The table should show live data, for example "Live progress" column should show the currently typed-in text of the given player._ **Tak.**

_-The game should consist of fixed-time rounds. In each round all currently playing people are presented with one sentence to type in. After the round time passes players are presented with the new sentence._ **Tak.**

_-Show metrics and stats for the currently active players._ **Tak.**

_-Words per minute - how fast the player correctly types in words. Words with errors shouldn't count._ **Tak.** ALE na ten moment funkcjonalność działa tak, że jeżeli słowo X wpiszemy z błędem, dopiero po poprawieniu tego słowa będzie nam liczyło słowo X+1.

_-Accuracy - how often the player hits the correct key. It should be the value of correctly typed-in characters to all characters in the given sentence._ **Tak.**

_-Feel free to extend the calculation if needed to handle edge cases._- Tutaj na ten moment nic więcej nie dodawałem, ale myślę, że trzeba uchwycić przypadki takie jak: gracz dołącza w trakcie rundy, gracz wychodzi w trakcie rundy, itp.

_-Saving player results. When the same player joins the server their stats are loaded._**Tak/Nie** - nasze statsy zapisują się w tabeli głównej z wynikami, ale nie tak, że anon wchodzi na stronę i widzi staty. Mamy na tę funkcjonalność przygotowny zarówno kod jak i bazę danych - przygotowałem auth oraz current state danego guesta zapisuje się w local storage. Tzn. Guest ma swój unikalny ID i przy ponownym wejściu na stronę jego statsy są bedą mogły być ładowane, ale tego już nie skończyłem, bo nie wydało mi się kluczowe dla MVP - tutaj od razu lepiej spiąć to z logiką fetchowania danych dla zalogowanego usera, co też w dużej mierze przygotowałem na pozimie supabsae.

_-Presenting a simple loading/error states_- **Tak/Nie** dodałem skeletony dla loadingów, dla errorów nie.

_-Sorting the table by columns, pagination, and changing the number of rows displayed (locally). Updating the current URL table sort, so we get the same sorting results when the page gets refreshed._ **Tak** tutaj zmergowałem to w jeden punkt, przechowujemy ustawienia tabelek w URL po prostu.

_-And adding anything else that you think will be useful for the user..._- Tutaj dodałem od razu możliwość ustawiania nicku.

## Co należy zrobić w dalszej kolejności i co zostało przygotowane pod rozszerzenie:

- dodanie testów - tego niestety już nie zdążyłem zrobić, ale imo jest to konieczne ASAP.
- kolejnym krokiem powinno być dodanie Auth - z doświadczenia wiem, że klienci bardzo szybko chcą, żeby była jakaś perzystencja danych, bo nie do końca rozumieją, że MVP bez auth to MVP. Tutaj mamy to przygotowane pod kolejną iterację wdrożenia.
- dokończenie zapisywania statystyk gracza przy ponownym wejściu na stronę (local storage + supabase);
- dokończenie real-time przy dołączaniu graczy bez odświeżania strony (supabase + edge function);
- obsługa edge cases (gracz dołącza w trakcie rundy, gracz wychodzi w trakcie rundy, itp.);
- poprawa liczenia WPM (liczenie słów po błędach);
- dodanie możliwości wyboru języka - przygotowałem pod to kolumnę lang w tabeli sentences;
- możliwość wyboru difficulty - przygotowałem pod to kolumnę difficulty w tabeli sentences;
- dodanie polityki prywatności, jest już link w footer żeby nie zapomnieć :)
- tworzenie własnych rund/lobby z custom rules - to już etap daleko poza MVP.

## Struktura bazy danych:

- players (id, kind (guest/authorized), user_id(łączy się z authusers w supabase), guest_id (z localstorage), username)
- sentences (id, text, enabled, difficulty, lang)
- results (round_id, player_id, wpm, accuracy, correct_chars, total_chars, sentence_text)
- game_setings (round_length_sec (żeby potem mozna było robić inne), selection_mode (żeby można było rozszerzać o custom rules));

## Czas pracy

Trudno powiedzieć dokładnie, ale tak: odświeżenie swojego template projektowego to nie liczyłem w czas; planowanie, wybór tech itd też nie liczyłm, bo zastanawiam się nad tym po prostu w międzyczasie; samo pisanie już jużtypów i placeholderów to myślę że około 2h; łączenie i wypełnianie kodem trochę ponad 1h. Ogólnie myślę, że do 4h. Pisania dokumentacji w to nie wliczam.

# Typerace — Tech & Commands

## Tech Stack

- **Framework:** Next.js 16, React 19, TypeScript 5
- **Styling:** Tailwind CSS v4, tailwindcss-animate, Radix UI primitives
- **State & Data:** Zustand 5, TanStack Query v5, TanStack Table v8, Zod v4
- **Backend SDK:** Supabase JS v2
- **UI/UX:** lucide-react, next-themes, sonner
- **Tooling:** ESLint 9, Prettier 3, Husky 9, lint-staged, Vitest, Testing Library, Playwright

## Environment

Create `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

# install deps

`npm install`

# dev

`next dev`
