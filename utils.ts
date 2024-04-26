export function availableTimes() {
  const times = [];
  // time between 7 am and 5 pm in full hours. 7am, 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm
  // make am times
  for (let i = 7; i < 12; i++) {
    times.push(`${i}:00 am`);
  }
  // make pm times
  for (let i = 1; i < 6; i++) {
    times.push(`${i}:00 pm`);
  }

  return times;
}

export function getYesterday() {
  const today = new Date();
  const yesterday = new Date(today);
  return yesterday;
}
