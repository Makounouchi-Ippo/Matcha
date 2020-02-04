export const name= /^[A-Z]*(?:-[A-Z]+)*$/i;
export const lastname = /^[A-Z]*(?:-[A-Z]+)*$/i;
export const mail =  /[a-z0-9!#$%&‘*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&‘*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
export const password =  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}/;
export const login = /^[A-Z][A-Z0-9]*(?:[-_][A-Z0-9]+)*$/i; 
export const address = /^[a-zA-Z0-9\s,'-]*$/;