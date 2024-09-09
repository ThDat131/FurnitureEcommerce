export const isHtmlTagRegex =
    /<\s*\w.*?>\s*(?!<br\s*\/?>)(?!<\/?\w+\s*>)(?!\s*$).+<\/\s*\w.*?>/;

export const isEmailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
