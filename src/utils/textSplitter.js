export function splitTextIntoLines(text, className = '') {
  return text.split(' ').map((word, i) => (
    `<span class="inline-block overflow-hidden ${className}">
      <span class="inline-block split-word" style="--word-index: ${i}">${word}</span>
    </span>`
  )).join(' ');
}

export function splitTextIntoChars(text, className = '') {
  return text.split('').map((char, i) => (
    `<span class="inline-block overflow-hidden ${className}">
      <span class="inline-block split-char" style="--char-index: ${i}">${char === ' ' ? '&nbsp;' : char}</span>
    </span>`
  )).join('');
}