import { Injectable } from '@angular/core';
import { Trip } from '../shared/trip';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor() { }

  trips: Trip[] = [
    new Trip(1, `https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdl
    fHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80`, "Hawaje", 6000, "14.07.2021", "21.07.2021",
      ` mozna uznac je za raj, w którym kazdy turysta niewatpliwie chcialby spedzic choc raz w swoim zyciu urlop. 
     To najpiekniejszy archipelag polozony na Oceanie Spokojnym. Jest najmlodszym sposród 50. stanów USA i jedynym 
     lezacym wylacznie na wyspach. Archipelag jest pochodzenia wulkanicznego, sklada sie ze 137 wysp, w tym osmiu 
     wiekszych: Kahoolawe, Kauai, Lanai, Maui, Molokai, Niihau, Oahu oraz Duzej Wyspy Hawai.`, 1),

    new Trip(2, `https://images.unsplash.com/photo-1504829857797-ddff29c27927?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfH
    x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80`, "Islandia", 3400, "14.06.2021", "21.06.2021",
      ` leży na granicy Oceanu Arktycznego i Oceanu Atlantyckiego. Główna wyspa znajduje się na południe od 
     koła podbiegunowego. Pod względem geologicznym Islandia jest najmłodszym obszarem kontynentu europejskiego, 
     położonym na „gorącym punkcie” Grzbietu Śródatlantyckiego. Na wyspie występują liczne wulkany, z których część 
     jest nadal aktywna, m.in. Hekla, Katla, Askja, Grímsvötn, Hvannadalshnúkur (najwyższy szczyt kraju). 
     Potwierdzeniem aktywności wulkanicznej są liczne gorące źródła oraz gejzery (samo słowo jest pochodzenia 
      islandzkiego), wykorzystywane na dużą skalę jako tania energia do ogrzewania mieszkań.`, 1),

    new Trip(3, `https://images.unsplash.com/photo-1527346944637-89b61119597c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8
    fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80`, "Wyspy Owcze", 7250, "20.07.2021", "25.07.2021",
      ` archipelag tworzy 18 głównych wysp wulkanicznych o powierzchni górzystej. Największe z nich to Streymoy 
     (373 km²) i Eysturoy (286 km²). Najwyższym wzniesieniem Wysp Owczych jest Slættaratindur (882 m n.p.m.) 
     na Eysturoy. Wzniesienia przecinają liczne doliny. Wybrzeża – na ogół skaliste i strome, tylko gdzieniegdzie 
     mają charakter fiordów. Są tu najwyższe klify w Europie, jak znajdujący się na Viðoy klif przylądka Enniberg 
     (745 m), zajmujący w Europie pierwsze miejsce. Rzeki są krótkie i wąskie, często przybierają na sile w okresie 
     pozimowych roztopów, zdarza się, iż zakończone są wodospadami spadającymi z wysokich klifów do oceanu. 
     Na wyspach występują także jeziora, z których największym jest Sørvágsvatn (3,56 km²) na wyspie Vágar.`, 1),

    new Trip(4, `https://images.unsplash.com/photo-1528164344705-47542687000d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx
    8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1369&q=80`, "Japonia", 10000, "19.08.2021", "30.08.2021",
      ` państwo wyspiarskie położone na wąskim łańcuchu wysp na zachodnim Pacyfiku, u wschodnich wybrzeży Azji, 
     o długości 3,3 tys. km. Archipelag rozciąga się niemal południkowo, tworząc łagodny łuk wygięty w stronę 
     kontynentu. Punktem wysuniętym najdalej na północ jest przylądek Sōya (45°31′N) na północnym krańcu wyspy 
     Hokkaido, a punktem wysuniętym najdalej na południe jest mini-archipelag trzech wysepek o nazwie 
     Oki-no-Tori-shima (20°25′N). Natomiast w przypadku wzięcia pod uwagę wyłącznie czterech głównych wysp, 
     najbardziej wysuniętym na północ punktem jest przylądek Sōya, a najbardziej wysuniętym na południe punktem 
     jest przylądek Sata (30°59′N) na krańcu półwyspu Ōsumi na wyspie Kiusiu`, 1),

    new Trip(5, `https://images.unsplash.com/photo-1558694440-03ade9215d7b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fG
    VufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80`, "Madagaskar", 6400, "2.09.2021", "9.09.2021",
      ` państwo wyspiarskie położone na Madagaskarze w zachodniej części Oceanu Indyjskiego, u południowo-wschodnich
    wybrzeży Afryki. Madagaskar jest czwartą co do wielkości wyspą na świecie i pierwszą w Afryce. Po rozpadzie
    superkontynentu Gondwana około 88 mln lat temu Madagaskar oddzielił się od subkontynentu indyjskiego, co 
    pozwoliło rodzimej faunie i florze ewoluować we względnej izolacji. W związku z tym Madagaskar ma bardzo
    bogaty ekosystem; ponad 90% malgaskiej dzikiej przyrody nie występuje w żadnym innym miejscu na Ziemi.
    Lokalna przyroda jest jednak zagrożona przez dynamicznie wzrastającą populację ludzi, rozwijającą się 
    infrastrukturę i przemysł oraz przez zmiany klimatu.`, 1),

    new Trip(6, `https://images.unsplash.com/photo-1535961652354-923cb08225a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx
    8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80`, "Laos", 5100, "4.06.2021", "11.06.2021",
      ` znajduje się na Półwyspie Indochińskim w południowo-wschodniej Azji. Jest jedynym krajem regionu pozbawionym 
     dostępu do morza. Od północy graniczy z Chinami, od wschodu z Wietnamem, od południa z Kambodżą i Tajlandią, 
     od zachodu z Mjanmą. Jest krajem prawie w całości porośniętym lasem. Na północy kraju rozciągają się liczne 
     wyżyny i góry. Najwyższym szczytem jest Phou Bia (2817 m n.p.m.). Na północnym wschodzie tereny wyżynne 
     przechodzą w Równinę Dzbanów (fr. Plaine Des Jarres), romboidalnego kształtu obszar żyznych ziem zarzucony 
     wielkimi, kamiennymi urnami grzebalnymi datowanymi na tysiące lat wstecz[potrzebny przypis]. Na południu 
     rozciąga się wąski pas lądu opadającego ku płaskowyżowi Bolovens. W czasach kolonialnych rozciągały się tu 
     liczne plantacje kawy i francuskie ośrodki wypoczynkowe. Rzeka Mekong w znacznej części jest rzeką graniczną 
     z Tajlandią.`, 1),

    new Trip(7, `https://images.unsplash.com/photo-1541769740-098e80269166?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGV
    ufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80`, "Egipt", 2200, "8.07.2021", "15.07.2021",
      ` staroegipska nazwa kraju oznacza „Czarny Ląd” i odnosi się do żyznych gruntów wzdłuż Nilu, będących 
     przeciwieństwem sąsiadującej z nimi pustyni, „Czerwonego Lądu”. Arabskie słowo Miṣr, obecna oficjalna 
     nazwa kraju, ma pochodzenie semickie. Według pierwotnego asyryjskiego rodzaju pisma słowa Misir / Musur 
     są spokrewnione z hebrajskim słowem מִצְרַיִם (Mitzráyim) oznaczającym kraj lub państwo. Początkowe wąskie 
     znaczenie tego słowa, rozumiane jako Egipt Dolny (Dolny Kraj), zostało rozszerzone na cały kraj (Górny i 
     Dolny Egipt).`, 1),

    new Trip(8, `https://images.unsplash.com/photo-1571864436401-7ada6f8de63d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx
    8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80`, "Chile", 8800, "20.09.2021", "30.09.2021",
      ` położone jest w południowo-zachodniej części Ameryki Południowej i rozciąga się wąskim pasem wzdłuż 
     wybrzeża o długości 4,3 tys. km. Najdalej na północ wysunięty punkt Chile to styk granic Chile, Peru i Boliwii 
     (17°30′S), a na południe przylądek Horn (55°59′S). Rozciągłość równoleżnikowa kraju w najszerszym miejscu wynosi 
     zaledwie 468 km, a w najwęższym 90 km. Wybrzeże w północnej i środkowej części państwa ma słabo rozwiniętą 
     linię brzegową, natomiast południowa część – bardzo dobrze. Powierzchnia całkowita kraju: 756 950 km², 
     z czego 748 800 km² stanowi ląd, pozostałe 8150 km² – wody oceaniczne. Chile uważa, że ma prawo do części 
     Antarktydy o powierzchni 1 236 000 km². Jest to teren sporny z Argentyną.`, 1),

    new Trip(9, `https://images.unsplash.com/photo-1597240890437-6d9c2d4c16aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfH
    x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80`, "Wyspa Wielkanocna", 11500, "16.08.2021",
      "23.08.2021", ` należy do najbardziej izolowanych miejsc na Ziemi. Znajduje się na Pacyfiku, 
    ponad 2000 km od wyspy Pitcairn i ok. 3600 km od wybrzeży Chile. Obszar Rapa Nui wynosi 163,6 km², długość – 
    ok. 15 km, a szerokość – ok. 20 km. Wyspa jest pochodzenia wulkanicznego i uformowały ją pomiędzy 750 a 
    100 tysięcy lat temu cztery główne wulkany: Rano Kau (przy którym znajduje się dawne centrum 
    pałacowo-ceremonialne), Rano Raraku (z kamieniołomem, w którym powstawały moai), Puakatike na Półwyspie 
    Poike oraz Terevaka (najmłodszy z wulkanów, będący jednocześnie najwyższym wzniesieniem Rapa Nui – 507 
    m n.p.m.). Pochodzenie geologiczne powoduje, że wyspa jest zbudowana ze skał tufowych, w których powstało 
    wiele jaskiń`, 1),

  ]

  getTripData() {
    return this.trips;

  }
}
