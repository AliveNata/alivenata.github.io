# alivenata.github.io

Personal portfolio site of **Alief Akbar**, Data Engineer.

Live: https://alivenata.github.io

I also use this site as a baseline example when mentoring fresh graduates and career switchers on how to build a simple, honest data portfolio.

## What is on the site

- **About**: who I am and what I work on
- **My Journey**: a timeline from non data jobs to a data engineering role
- **Skills**
- **Projects**: Business Intelligence Portfolio and AlyxLabs
- **Data Highlight**: an NBA player stats case study, from 11 raw snapshots to one clean dataset, a statistical test, and a forecast
- **Contact** and a downloadable CV

## Built with

Plain HTML, CSS, and JavaScript. No framework and no build step, hosted on GitHub Pages.

```
index.html
style.css
script.js        # mobile nav and small interactions
assets/
    cv/          # CV in PDF
    nba/         # slides for the NBA case study
```

## Run locally

```bash
git clone https://github.com/AliveNata/alivenata.github.io.git
cd alivenata.github.io
python -m http.server 8000   # then open http://localhost:8000
```

## Use it as a template

Feel free to fork it for your own portfolio. Replace the text in `index.html`, your CV in `assets/cv/`, and the images in `assets/`.
