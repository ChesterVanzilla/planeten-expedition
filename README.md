# CardScan CM 6.0

Private PWA zum Erkennen von Pokémonkarten und Öffnen der passenden Cardmarket-Suche.

## Erkennungspipeline

1. geführter Kartenzuschnitt
2. serverseitige KI-Bilderkennung über einen eigenen Cloudflare-Worker
3. lokale OCR als unabhängige Kontrolle
4. Suche nach Name, Sammlernummer, Setgröße und Setkürzel in TCGdex
5. Vergleich des Fotos mit offiziellen Kartenabbildungen
6. Trefferliste und Cardmarket-Weiterleitung

Die KI-Verbindung ist optional. Ohne Worker läuft die lokale Hybrid-Erkennung weiter.

Die Einrichtung ist in `UPDATE-V6.md` beschrieben.
