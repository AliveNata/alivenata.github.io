document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const ctx = document.getElementById("gmvChart");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Actual GMV", "Target GMV"],
    datasets: [{
      label: "IDR (billions)",
      data: [70, 82],
      backgroundColor: ["#58a6ff", "#30363d"],
      borderRadius: 6,
      maxBarThickness: 90
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (item) => `IDR ${item.raw}B`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#8b949e" },
        grid: { color: "#30363d" }
      },
      x: {
        ticks: { color: "#8b949e" },
        grid: { display: false }
      }
    }
  }
});
