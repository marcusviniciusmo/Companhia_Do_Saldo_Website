export function GetAgeOfStore() {
  const storeOpened = 2008;

  return GetCurrentYear() - storeOpened;
}

export function GetCurrentYear() {
  const now = new Date();

  return now.getFullYear();
};

export function SetInput(event: any, setInput: Function) {
  setInput(event.target.value);
};