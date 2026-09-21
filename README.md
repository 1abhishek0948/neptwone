# NEPTWONE front-end redesign

A dependency-free static front-end designed around NEPTWONE's live restaurant content. Open `index.html` through any static web server (for example `python3 -m http.server 8080`) while developing.

## Content source mapping

- Restaurant copy, address, opening hours, phone, email, Facebook, reservation URL, live daily-menu URL, suggestions URL and events URL: `https://neptwone.com/`
- Official menu PDF URLs: the existing NEPTWONE menu library linked in `index.html`
- Daily menu: the former Google Docs iframe has been removed. The “Plats du jour” card now opens NEPTWONE’s published weekly PDF directly. Update its single URL in `index.html` when the restaurant publishes the following week’s file.
- Photography: existing NEPTWONE-owned `impro.usercontent.one` image URLs, centralized in the `assets` registry at the top of `script.js`. Each HTML image references a descriptive `data-asset` key, making a future CMS or CDN migration a one-file change.

## Reservation behavior

The legacy form is still linked directly from the reservation module. The on-page form creates a fully populated email to the restaurant's published `info@neptwone.com` address; it does not transmit reservation data to a new or unverified service.

## Deployment note

There was no existing local source code or backend in this workspace. Before replacing the live site, port this template into the live site's platform or configure the desired server-side reservation endpoint. The markup deliberately retains a direct path to the working legacy reservation form until that integration is available.
