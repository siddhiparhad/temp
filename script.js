document.getElementById("convertBtn").addEventListener("click", () => {
  const input = document.getElementById("temperatureInput").value;
  const unit = document.querySelector('input[name="unit"]:checked').value;
  const resultDisplay = document.getElementById("resultDisplay");

  if (input === "" || isNaN(input)) {
    resultDisplay.textContent = "❌ Please enter a valid number!";
    resultDisplay.style.color = "#ffbaba";
    return;
  }

  const temp = parseFloat(input);
  let result = "";

  switch (unit) {
    case "celsius":
      result = `
        🔥 ${temp}°C = ${(temp * 9/5 + 32).toFixed(2)}°F<br>
        ❄️ ${temp}°C = ${(temp + 273.15).toFixed(2)}K
      `;
      break;
    case "fahrenheit":
      result = `
        🔥 ${temp}°F = ${((temp - 32) * 5/9).toFixed(2)}°C<br>
        ❄️ ${temp}°F = ${(((temp - 32) * 5/9) + 273.15).toFixed(2)}K
      `;
      break;
    case "kelvin":
      result = `
        ❄️ ${temp}K = ${(temp - 273.15).toFixed(2)}°C<br>
        🔥 ${temp}K = ${((temp - 273.15) * 9/5 + 32).toFixed(2)}°F
      `;
      break;
  }

  resultDisplay.innerHTML = result;
  resultDisplay.style.color = "#fff";
});
const toggleBtn = document.getElementById("toggleTheme");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  toggleBtn.textContent = document.body.classList.contains("light-mode")
    ? "🌞 Light Mode"
    : "🌙 Dark Mode";
});
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "toast show";
  setTimeout(() => {
    toast.className = "toast"; // Hide toast after 3s
  }, 3000);
}

document.getElementById("convertBtn").addEventListener("click", () => {
  const input = document.getElementById("temperatureInput").value;
  const unit = document.querySelector('input[name="unit"]:checked').value;
  const resultDisplay = document.getElementById("resultDisplay");

  if (input === "" || isNaN(input)) {
    showToast("⚠️ Invalid input! Please enter a valid number.");
    resultDisplay.innerHTML = "";
    return;
  }

  const temp = parseFloat(input);
  let result = "";

  switch (unit) {
    case "celsius":
      result = `
        🔥 ${temp}°C = ${(temp * 9/5 + 32).toFixed(2)}°F<br>
        ❄️ ${temp}°C = ${(temp + 273.15).toFixed(2)}K
      `;
      break;
    case "fahrenheit":
      result = `
        🔥 ${temp}°F = ${((temp - 32) * 5/9).toFixed(2)}°C<br>
        ❄️ ${temp}°F = ${(((temp - 32) * 5/9) + 273.15).toFixed(2)}K
      `;
      break;
    case "kelvin":
      result = `
        ❄️ ${temp}K = ${(temp - 273.15).toFixed(2)}°C<br>
        🔥 ${temp}K = ${((temp - 273.15) * 9/5 + 32).toFixed(2)}°F
      `;
      break;
  }

  resultDisplay.innerHTML = result;
});
// RIPPLE EFFECT
const btn = document.getElementById("convertBtn");
btn.addEventListener("click", function(e) {
  const wrapper = this.parentElement;
  const circle = document.createElement("span");
  const diameter = Math.max(this.clientWidth, this.clientHeight);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${e.clientX - this.offsetLeft - radius}px`;
  circle.style.top = `${e.clientY - this.offsetTop - radius}px`;
  circle.classList.add("ripple");
  
  // Remove old ripple if exists
  const rippleOld = wrapper.getElementsByClassName("ripple")[0];
  if (rippleOld) rippleOld.remove();
  
  wrapper.appendChild(circle);
});

// SHAKE ON INVALID INPUT
function indicateInvalidInput(inputEl) {
  inputEl.classList.add("shake");
  setTimeout(() => {
    inputEl.classList.remove("shake");
  }, 400);
}

// Integrate with showToast logic
document.getElementById("convertBtn").addEventListener("click", () => {
  const inputEl = document.getElementById("temperatureInput");
  const input = inputEl.value;
  const resultDisplay = document.getElementById("resultDisplay");
  
  if (input === "" || isNaN(input)) {
    showToast("⚠️ Invalid input! Please enter a valid number.");
    indicateInvalidInput(inputEl);
    resultDisplay.innerHTML = "";
    return;
  }
  
  // ...existing conversion logic...
});
const inputEl = document.getElementById("temperatureInput");
const resultDisplay = document.getElementById("resultDisplay");
const historyList = document.getElementById("historyList");

document.getElementById("clearBtn").addEventListener("click", () => {
  inputEl.value = "";
  resultDisplay.innerHTML = "";
});

document.getElementById("convertBtn").addEventListener("click", () => {
  const input = inputEl.value;
  const unit = document.querySelector('input[name="unit"]:checked').value;

  if (input === "" || isNaN(input)) {
    showToast("⚠️ Invalid input! Please enter a valid number.");
    indicateInvalidInput(inputEl);
    resultDisplay.innerHTML = "";
    return;
  }

  const value = parseFloat(input);
  let c, f, k;
  let display = "";

  if (unit === "celsius") {
    c = value;
    f = (value * 9 / 5) + 32;
    k = value + 273.15;
  } else if (unit === "fahrenheit") {
    c = (value - 32) * 5 / 9;
    f = value;
    k = (f - 32) * 5 / 9 + 273.15;
  } else if (unit === "kelvin") {
    k = value;
    c = value - 273.15;
    f = (c * 9 / 5) + 32;
  }

  display = `🌡️ ${value}°${unit[0].toUpperCase()} = ${c.toFixed(2)}°C = ${f.toFixed(2)}°F = ${k.toFixed(2)}K`;
  resultDisplay.innerHTML = display;

  // Add to history
  const li = document.createElement("li");
  li.textContent = display;
  historyList.prepend(li);
});
document.getElementById("clearHistoryBtn").addEventListener("click", () => {
  const historyList = document.getElementById("historyList");
  historyList.innerHTML = "";
});
const translations = {
  en: {
    heading: "🌡️ Temperature Converter",
    convert: "Convert",
    clear: "Clear",
    clearHistory: "Clear History",
    placeholder: "Enter Temperature",
    result: "Converted Result",
    history: "Conversion History",
    invalid: "⚠️ Invalid input! Please enter a valid number.",
    unitLabels: ["Celsius", "Fahrenheit", "Kelvin"]
  },
  hi: {
    heading: "🌡️ तापमान कन्वर्टर",
    convert: "कन्वर्ट करें",
    clear: "साफ करें",
    clearHistory: "इतिहास मिटाएं",
    placeholder: "तापमान दर्ज करें",
    result: "परिणाम",
    history: "कन्वर्शन इतिहास",
    invalid: "⚠️ अमान्य इनपुट! कृपया सही संख्या दर्ज करें।",
    unitLabels: ["सेल्सियस", "फारेनहाइट", "केल्विन"]
  },
  mr: {
    heading: "🌡️ तापमान रूपांतरक",
    convert: "रूपांतर करा",
    clear: "साफ करा",
    clearHistory: "इतिहास हटवा",
    placeholder: "तापमान टाका",
    result: "रूपांतरीत तापमान",
    history: "इतिहास",
    invalid: "⚠️ अमान्य मूल्य! कृपया योग्य संख्या द्या.",
    unitLabels: ["सेल्सियस", "फॅरेनहाइट", "केल्विन"]
  }
};
const langSelect = document.getElementById("languageSelect");

function updateLanguage(lang) {
  const t = translations[lang];
  document.querySelector("h1").textContent = t.heading;
  document.getElementById("convertBtn").textContent = t.convert;
  document.getElementById("clearBtn").textContent = t.clear;
  document.getElementById("clearHistoryBtn").textContent = t.clearHistory;
  document.getElementById("temperatureInput").placeholder = t.placeholder;
  document.querySelector(".history h3").textContent = t.history;

  // Update radio labels
  const labels = document.querySelectorAll(".unit-selection label");
  labels.forEach((label, index) => {
    label.childNodes[1].textContent = " " + t.unitLabels[index];
  });

  // Store for toast later
  window.currentLangInvalidMsg = t.invalid;
}

langSelect.addEventListener("change", () => {
  updateLanguage(langSelect.value);
});

// Replace toast message usage with:
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message || window.currentLangInvalidMsg || translations.en.invalid;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}
updateLanguage("en");
recognition.onresult = (event) => {
  const spokenText = event.results[0][0].transcript;
  const number = parseFloat(spokenText);
  if (!isNaN(number)) {
    temperatureInput.value = number;
    speakText("Temperature recorded!");
  } else {
    showToast("Please say a valid number.");
  }
};
const micIcon = document.querySelector(".mic-icon");

micBtn.addEventListener("click", () => {
  recognition.start();
  micIcon.classList.add("listening");
});

recognition.onend = () => {
  micIcon.classList.remove("listening");
};
