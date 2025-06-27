# Plan

Von Idee Schritt für Schritt zur App Umsetzung.

## Mockup / Wireframe

Erstelle Wireframe

Aus Wireframe können wir LISTE an COMPONENTS relativ leicht herausfinden.

Alles was sich WIEDERHOLT, ist ein guter Candidate für eine Component.

Beispiel Pizza App:
https://pizza-store-two.vercel.app/

Erste Idee einer Component Liste:
- Header
- Nav
- Search Box
- PizzaList
- PizzaCard

Für jede Component, die IMMER sichtbar ist und sich nicht ändert (Beispiel Header) kann man auch das HTML direkt in die App.jsx packen.

Für jede Component ein File anlegen (ein .jsx File)

## CSS Reset

Alle Default Styles von React raus :) => index.css, App.css

## Dummy Content für Components

Für jede Component ein File anlegen. 

Einfach erstmal Dummy Content in App.jsx einfügen. Noch ohne State und Logik.

Dann kann ich erstmal, ohne großen Stress, das Layout für die Components aufsetzen (Flex, Grid, Bootstrap Grid, etc).

## Outsource Components in Files

Outsource dummy HTML Blöcke aus App.jsx in eigene JSX files.

Starte mit den Dingen, die sich wiederholen => z.B. Cards, Custom Buttons

Elemente, die auf allen Pages gleich bleiben (wie Nav oder Header Title) können auch erstmal in App.jsx bleiben
Und erst wenn der Code in App.jsx zuviel wird, kann man auch diese Teile auslagert. 

## DATEN

### Outsource hardcoded Daten aus allen HTML Cards in State

Outsource Daten von Items in STATE.

STATE => das sind die DATEN, die sich durch User Interaktion ändern (!) können oder gefiltert werden können

Bei Cards => fast immer ein Array von Objects

Gebe die Daten als PROP in die Components hinein, die Daten anzeigen sollen.

### Injecte Daten in Components hinein

Injecte Daten aus State in Components mit Props

Am einfachsten: 
Mappe über Array von Objects und wandel jedes Object in eine Component um. Übergebe Object als PROP jeder Card.

Card bekommt Daten. Und gibt Daten in seinem Layout an den richtigen Stellen aus.

### ??? Next Step ???

To be continued...


