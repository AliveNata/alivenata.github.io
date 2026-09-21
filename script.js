document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.setAttribute("aria-expanded", "false");
navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const slides = [
  {
    src: "assets/nba/nba-title.jpg",
    alt: "Title slide of the NBA Player Stats Analysis deck",
    caption: "The title slide states exactly what this project covers and for what season, so anyone opening the deck knows the scope before reading a single insight."
  },
  {
    src: "assets/nba/nba-summary.jpg",
    alt: "Summary slide from the NBA Player Stats Analysis deck",
    caption: "The deck opens with a plain summary of what data is being analyzed and what questions it should answer. Stating scope and objectives before any chart is what makes a report readable by someone who was not in the room while the work happened."
  },
  {
    src: "assets/nba/nba-data-overview.jpg",
    alt: "Data overview slide defining every column in the dataset",
    caption: "Every column in the dataset gets defined in plain language before it gets used anywhere: player, age, position, points, assists, rebounds, shooting percentages. A reader should never have to guess what a column means."
  },
  {
    src: "assets/nba/nba-data-cleaning.jpg",
    alt: "Data cleaning and preparation slide listing 4 cleaning steps",
    caption: "Cleaning is documented step by step: handling missing values, fixing encoding issues in player names, adding date columns, reordering columns for readability. Each step also explains why it matters, not just what was run."
  },
  {
    src: "assets/nba/nba-eda-monthly-trends.jpg",
    alt: "EDA insight slide showing A.J. Lawson's monthly performance trends",
    caption: "Real numbers instead of a vague trend line. A.J. Lawson's rebounds jumped 70.45 percent in January while his points dropped 24.57 percent in the same month. Naming the exact player and the exact percentage turns an EDA slide into evidence."
  },
  {
    src: "assets/nba/nba-eda-top5-monthly.jpg",
    alt: "EDA insight slide showing the top 5 productive players per month",
    caption: "This chart ranks the top 5 scorers for a given month next to games played, so a high scoring average gets checked against how many games it is based on. Example: Devin Booker put up 182 points across 25 games in November."
  },
  {
    src: "assets/nba/nba-eda-top10-impact-shot.jpg",
    alt: "EDA insight slide comparing top 10 players by impact and by shot distribution",
    caption: "Two related views side by side. One ranks players by combined scoring, assists, and rebounds. The other ranks them by shooting efficiency across field goals, two point, and three point attempts. Volume production and shooting accuracy are not the same thing, so both get shown."
  },
  {
    src: "assets/nba/nba-eda-age-vs-performance.jpg",
    alt: "EDA insight slide showing average points by age and position",
    caption: "Average points broken down by age and position, stacked so it is easy to see which age groups and positions carry more of the scoring load across the league."
  },
  {
    src: "assets/nba/nba-statistical-analysis.jpg",
    alt: "Statistical analysis slide showing ANOVA and regression results for Alex Fudge",
    caption: "This is where the project moves past \"looks like it went up\" into \"is that actually significant.\" The ANOVA test returns a p value under 0.05, and a regression model forecasts Alex Fudge's points for next month at 1.67. That is a testable claim, not a guess from eyeballing the chart."
  },
  {
    src: "assets/nba/nba-key-insight.jpg",
    alt: "Key insight slide summarizing the main findings",
    caption: "The findings get compressed into a handful of one line takeaways about who performs consistently and who fits which role. This is the slide a busy stakeholder actually reads."
  },
  {
    src: "assets/nba/nba-recommendation.jpg",
    alt: "Recommendation slide with 4 action items",
    caption: "Analysis without a recommendation is just a report. This slide turns the numbers into 4 concrete actions a coach or manager could actually act on."
  },
  {
    src: "assets/nba/nba-conclusion.jpg",
    alt: "Conclusion slide tying the findings back to the analysis objectives",
    caption: "The conclusion ties the statistical findings back to the original objectives: what the data shows, which player profiles perform best, and how ANOVA and regression support a decision instead of just describing history."
  },
  {
    src: "assets/nba/nba-thank-you.jpg",
    alt: "Closing thank you slide",
    caption: "A short closing slide. A small detail, but it signals the presentation is complete rather than trailing off after the last data point."
  }
];

let slideIndex = 0;
const slideViewer = document.getElementById("slideViewer");
const slideImg = document.getElementById("slideImg");
const slideCounter = document.getElementById("slideCounter");
const slideCaption = document.getElementById("slideCaption");
const slidePrev = document.getElementById("slidePrev");
const slideNext = document.getElementById("slideNext");
const slideFullscreen = document.getElementById("slideFullscreen");
const slideTotal = document.getElementById("slideTotal");
const slideTotalBottom = document.getElementById("slideTotalBottom");
slideTotal.textContent = slides.length;
slideTotalBottom.textContent = slides.length;

function renderSlide() {
  const slide = slides[slideIndex];
  slideImg.src = slide.src;
  slideImg.alt = slide.alt;
  slideCaption.textContent = slide.caption;
  slideCounter.textContent = slideIndex + 1;
}

slidePrev.addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  renderSlide();
});

slideNext.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % slides.length;
  renderSlide();
});

slideFullscreen.addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    slideViewer.requestFullscreen();
  }
});

renderSlide();
