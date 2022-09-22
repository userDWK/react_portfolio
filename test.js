// const a = { a: "1024px", b: "2045px", c: "3000px" };

// Object.keys(a).reduce((acc, label) => {
//   console.log(acc, label);
//   return acc;
// });
// const sizes = {
//   wide: "1200px",
//   desktop: "992px",
//   tablet: "768px",
//   phone: "376px",
// };
// media = Object.keys(sizes).reduce((acc, label) => {
//   console.log(acc, label);
//   acc[label] = (...args) => css`
//     @media (max-width: ${sizes[label]}) {
//       ${css(...args)}
//     }
//   `;
//   console.log(acc);
//   return acc;
// }, {});
