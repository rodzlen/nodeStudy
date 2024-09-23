const myURL = new URL('https://velog.io/@rodzlen/posts');

console.log('searchParams: ' ,myURL.searchParams);
console.log('searchParams.getAll(): ', myURL.searchParams.getAll('category'));

