export function GetAgeOfStore() {
  const storeOpened = 2008;

  return GetCurrentYear() - storeOpened;
}

export function GetCurrentYear() {
  const now = new Date();

  return now.getFullYear();
};