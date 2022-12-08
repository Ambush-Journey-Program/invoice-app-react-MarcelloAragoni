import { sortParams } from '../utilities/consts';

export function formatQueryParams(params) {
  const urlParams = new URLSearchParams({
    ...sortParams
  });

  params.forEach((filter) => {
    if (filter.value) {
      urlParams.set(filter.name, filter.value);
    } else {
      urlParams.delete(filter.name);
    }
  });

  return urlParams;
}

export function handleShowConfirmationWindow(id, value) {
  document.getElementById(id).classList.remove(value);
}

export function handleHideConfirmationWindow(id, value) {
  document.getElementById(id).classList.add(value);
}
