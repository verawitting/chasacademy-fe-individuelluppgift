# Tillgänglighetsanalys och optimering – Individuell inlämningsuppgift

## Beskrivning

Detta projekt är en tillgänglighets- och prestandaoptimerad version av den ursprungliga webbplatsen.
Syftet med uppgiften var att identifiera allvarliga tillgänglighetsproblem, motivera åtgärder utifrån WCAG och förbättra sidans prestanda (särskilt LCP).

## Genomförda förbättringar

### Tillgänglighet (WCAG)

* Korrigerad rubrikstruktur (endast en h1)
* Tillagda alt-attribut med beskrivande texter
* Semantisk HTML (header, nav, main, section, footer)
* Labels och aria-attribut i formulär
* Skip-link för tangentbordsnavigering
* Förbättrad fokusmarkering

Resultat:
0 violations i axe efter åtgärder.

## Prestandaoptimering

* Optimering av LCP-bilden (storlek och attribut)
* Eager loading på hero-bild
* Lazy loading på bilder under folden
* Defer på scripts
* Minskad bildstorlek och förbättrad leverans

Lighthouse-resultat (efter optimering)*:
Axe användes under utvecklingsfasen för tillgänglighetstestning men togs bort vid Lighthouse-mätningar för att undvika att testbiblioteket påverkade prestandaresultatet.

* Performance: 100
* Accessibility: 100
* Best Practices: 100
* SEO: 100

## Testmetoder

Följande verktyg har använts:

* axe (automatisk tillgänglighetstestning)
* Lighthouse (prestanda och tillgänglighet)
* Chrome DevTools (LCP-analys)
* Tangentbordstest (Tab-navigering och skip-link)

## Hur projektet testas

1. Öppna sidan i webbläsare
2. Navigera med Tab för att verifiera tangentbordsstöd
4. Kör Lighthouse i Chrome DevTools
5. Kontrollera console-loggar för LCP-mätning
6. (Valfritt) Kör axe i utvecklingsläge

## Video

Videon demonstrerar:

* Tangentbordsnavigering
* Fokusmarkering
* Skip-link
* Axe-resultat
* LCP-loggar i console
