export const regexString = /^[\w -'"()!:/]{2,128}/;
export const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&_-]).{8,32}$/;
export const regexMail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const regexPhoneNumber = /^(?!0{2,10}\d{2,8})(0\d{9})|(0\d( \.-)(\d{2}\4){4})/;
export const regexSIRET = /^\d{14}/
export const regexPostal = /^(0[1-9]|[1-8][0-9]|9[0-8])[0-9]{3}$/;