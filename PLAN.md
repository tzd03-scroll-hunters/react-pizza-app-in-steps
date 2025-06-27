# Plan

## Mockup / Wireframe

Erstelle Wireframe
Über Wireframe bekommen wir COMPONENTS

Alles was sich WIEDERHOLT, ist definitiv immer eine Component.

Am Ende haben wir eine erste Liste an Componentns.

Beispiel Pizza App:
https://pizza-store-two.vercel.app/

Erste Component Liste:
- Header
- Nav
- Search Box
- PizzaList
- PizzaCard

Für jede Component, die IMMER sichtbar ist und sich nicht ändert (Beispiel Header) kann man auch das HTML direkt in die App.jsx packen.

## VsCode

Für jede Component ein File anlegen (ein .jsx File)

## CSS Reset

Alle Default Styles von React raus

## Dummy Content für Components

Einfach erstmal Dummy Content ohne State und Logik.

Dann kann ich erstmal, ohne großen Stress, die Components anordnen (Flex, Grid).

## Outsourcing components in Files

Outsource dummy HTML in eigene JSX files.

Starte mit den Dingen, die sich wiederholen => z.B. Cards, Custom Buttons

## DATEN

### Outsource hardcoded Daten aus HTML cards in State

Outsource Daten von Items in STATE und gebe die Daten als PROP in die Components hinein.

STATE => das sind die DATEN, die sich ändern können oder gefiltert werden können

PROPS => konkrete Daten aus State in eine Component / Layout injecten / einfügen

Bei Cards => fast immer ein Array von Objects

### Injecte Daten in Component mit Props

Am einfachsten: 
Mappe über Array von Objects und wandel jedes Object in eine Component um. Übergebe Object als PROP jeder Card.

Card bekommt Daten und gibt Daten in seinem Layout aus.




