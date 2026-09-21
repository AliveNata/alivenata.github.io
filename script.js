document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const slides = [
  {
    src: "assets/nba/nba-summary.jpg",
    alt: "Summary slide from the NBA Player Stats Analysis deck",
    caption: "The deck opens with a plain summary of what data is being analyzed and what questions it should answer. Stating scope and objectives before any chart is what makes a report readable by someone who was not in the room while the work happened."
  },
  {
    src: "assets/nba/nba-eda-monthly-trends.jpg",
    alt: "EDA insight slide showing A.J. Lawson's monthly performance trends",
    caption: "Real numbers instead of a vague trend line. A.J. Lawson's rebounds jumped 70.45 percent in January while his points dropped 24.57 percent in the same month. Naming the exact player and the exact percentage turns an EDA slide into evidence."
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
  }
];

let slideIndex = 0;
const slideImg = document.getElementById("slideImg");
const slideCounter = document.getElementById("slideCounter");
const slideCaption = document.getElementById("slideCaption");
const slidePrev = document.getElementById("slidePrev");
const slideNext = document.getElementById("slideNext");
const slideDots = document.getElementById("slideDots");

slides.forEach((slide, i) => {
  const dot = document.createElement("button");
  dot.className = "slide-dot";
  dot.type = "button";
  dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
  dot.addEventListener("click", () => {
    slideIndex = i;
    renderSlide();
  });
  slideDots.appendChild(dot);
});

function renderSlide() {
  const slide = slides[slideIndex];
  slideImg.src = slide.src;
  slideImg.alt = slide.alt;
  slideCaption.textContent = slide.caption;
  slideCounter.textContent = slideIndex + 1;
  slideDots.querySelectorAll(".slide-dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === slideIndex);
  });
}

slidePrev.addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  renderSlide();
});

slideNext.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % slides.length;
  renderSlide();
});

renderSlide();
