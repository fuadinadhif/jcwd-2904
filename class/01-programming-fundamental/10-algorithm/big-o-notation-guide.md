# Big O Notation Guide

1. If not dependant on input size - Constant O(1)
2. If there is a loop - Linear O(n)
3. If there is a nested loop - Quadratic O(n^2)

   ```js
   for (let i = 0; i < n; i++) {
     for (let j = i; j < i; i++) {}
   }

   for (let of nums) {
    nums.map()
   }
   ```

4. If the input is reduced - Logarithmic O(logn)
