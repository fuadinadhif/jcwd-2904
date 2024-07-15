# Insertion Sort

1. Make two array, sorted and unsorted
2. Make a variable to hold the insertion value (NTI)
3. Compare last element of sorted array to the NTI
4. If NTI is larger, shift NTI to the right of the last sorted array element
5. If not, place/INSERT NTI to the right of the last sorted array element
6. Repeat until the last array

| step                | NTI | SE  | explanation                              |
| ------------------- | --- | --- | ---------------------------------------- |
| [-6, 20, 8, -2, 4]  | 20  | -6  | -6 > 20? No. Place 20 to the right of -6 |
| [-6, 20, 8, -2, 4]  | 8   | 20  | 20 > 8? Yes. Shift 20 to the right       |
| [-6, 20, 20, -2, 4] | 8   | -6  | -6 > 8? No. Place 8 to the right of -6   |
| [-6, 8, 20, -2, 4]  | -2  | 20  | 20 > -2? Yes. Shift 20 to the rigt       |
| [-6, 8, 20, 20, 4]  | -2  | 8   | 8 > -2? Yes. Shift 8 to the right        |
| [-6, 8, 8, 20, 4]   | -2  | -6  | -6 > -2? No. Place -2 to the right of -6 |
| [-6, -2, 8, 20, 4]  | 4   | 20  | 20 > 4? Yes. Shift 20 to the right       |
| [-6, -2, 8, 20, 20] | 4   | 8   | 8 > 4? Yes. Shift 8 to the right         |
| [-6, -2, 8, 8, 20]  | 4   | -2  | -2 > 4? No. Place 4 to the right of -2   |
| [-6, -2, 4, 8, 20]  |     |     | Reached the end of the array             |

# Quick Sort

[-6] [-2] => []
[] [-2] => [-6]
[] [] => [-6, -2]

[8] [20] => []
[] [20] => [8]
[] [] => [8, 20]

[-6, -2] [4] => []
[-2] [4] => [-6]
[] [4] => [-6, -2]
[] [] => [-6, -2, 4]

[-6, -2, 4] [8, 20] => []
[-2, 4] [8, 20] => [-6]
[4] [8, 20] => [-6, -2]
[] [8, 20] => [-6, -2, 4]
[] [20] => [-6, -2, 4, 8]
[] [] => [-6, -2, 4, 8, 20]
