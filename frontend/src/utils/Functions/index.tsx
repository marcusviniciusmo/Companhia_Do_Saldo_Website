export function GetAgeOfStore() {
  const storeOpened = 2008;

  return GetCurrentYear() - storeOpened;
}

export function GetCurrentYear() {
  const now = new Date();

  return now.getFullYear();
};

export function SetInput(event: any, setInput: Function, onlyNumbers = false) {
  if (onlyNumbers)
    setInput(event.target.value.replace(/[^0-9]/, ''));
  else
    setInput(event.target.value);
};