

document.addEventListener("DOMContentLoaded", function () {
    var items = document.querySelectorAll(".add-to-cart");
    items.forEach(function (item) {
        item.addEventListener("click", function () {
            alert("Item added to cart!");
        });
    });

    var newsletterButton = document.querySelector(".newsletter .primary-button");
    if (newsletterButton) {
        newsletterButton.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Thank you for subscribing!");
        });
    }
});

window.addEventListener("load", () => {
  axe.run(document, {}, (err, results) => {
    if (err) throw err;

    console.log("Axe accessibility results:", results);

    if (results.violations.length === 0) {
      console.log("No accessibility issues found!");
    } else {
      console.log("Accessibility issues:", results.violations);
    }
  });
});

const lcpObserver = new PerformanceObserver((entryList) => {
  const entries = entryList.getEntries();
  const lastEntry = entries[entries.length - 1];

  console.log("📊 LCP value:", lastEntry.startTime, "ms");
});

lcpObserver.observe({
  type: "largest-contentful-paint",
  buffered: true,
});
