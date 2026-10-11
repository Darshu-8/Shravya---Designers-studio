# Shravya Designers Studio - Demo Website

A static website (HTML, CSS, vanilla JavaScript). No backend, database or paid service needed.
This is a demo concept and not the studio's official website. Images and designs are samples.

## Files
- `index.html` - page text and structure
- `styles.css` - colours and fonts (edit the `:root` block)
- `script.js` - contact details, designs, filters, enquiry links
- `README.md` - this guide

## Before you share it, confirm with the studio
Open `script.js` and check the `CONFIG` block at the top:
1. `phone` - taken from the Instagram contact screen. Ask if it is on WhatsApp. If not, set `whatsappEnabled: false`.
2. `instagramUrl` - confirm the exact handle spelling.
3. `mapUrl` - replace with the studio's own Google Maps link if they prefer.

## Publish on Render (Static Site)
1. Upload these files to the root of a GitHub repository.
2. On render.com choose New, then Static Site, and pick the repository.
3. Branch `main`, Build Command empty, Publish Directory `.`
4. Click Create Static Site and open the `.onrender.com` link.

## Edit designs
Edit the `PRODUCTS` list in `script.js` (name, category, badge, description, image, alt). Categories must be: Maggam Work, Bridal, Kids Wear, Custom Design. To use the studio's own photos, add them to an `images` folder and set `image: "images/photo.jpg"`. Only use their photos with their permission.

## Notes
- Prices are not invented; cards say "Price on enquiry".
- The Instagram button links to the profile only; no live posts are shown.
- No hours, email or testimonials are included because none were provided.
