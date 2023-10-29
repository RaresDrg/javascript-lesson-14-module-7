/* Task 1 - Standard vs Throttle vs Debounce(trailing) vs Debounce(leading) */

const outputStandartEl = document.getElementById("outputStandart");
const outputThrottleEl = document.getElementById("outputThrottle");
const outputDebounceTrailingEl = document.getElementById("outputDebounceTrailing");
const outputDebounceLeadingEl = document.getElementById("outputDebounceLeading");

const eventScrollCounter = {
  standard: 0,
  throttle: 0,
  debounceTrailing: 0,
  debounceLeading: 0,
}



document.addEventListener("scroll", () => {
  eventScrollCounter.standard += 1;
  outputStandartEl.textContent = eventScrollCounter.standard;
})

document.addEventListener("scroll", _.throttle(() => {
  eventScrollCounter.throttle += 1;
  outputThrottleEl.textContent = eventScrollCounter.throttle;
}, 5000)
)

document.addEventListener("scroll", _.debounce(() => {
  eventScrollCounter.debounceTrailing += 1;
  outputDebounceTrailingEl.textContent = eventScrollCounter.debounceTrailing;
}, 5000)
);

document.addEventListener("scroll", _.debounce(() => {
  eventScrollCounter.debounceLeading += 1;
  outputDebounceLeadingEl.textContent = eventScrollCounter.debounceLeading;
}, 5000, { leading: true, trailing: false, })
);