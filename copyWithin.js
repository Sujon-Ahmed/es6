// copyWithin
// copyWithin(target, start, end);
// ✅ target is required
// ✅ start defaults to 0
// ✅ end defaults to array.length
// ✅ never changes array.length
// ✅ overwrites original array
// ✅ return modified array

const programmingLanguage = ['JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST'];
programmingLanguage.copyWithin(2, 1, 2);
console.log(programmingLanguage);