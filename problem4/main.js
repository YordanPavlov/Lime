
var math = require('mathjs');




function numOfPlaylists(N, K, L) {
  /*
   * Filling the first K + 1 slots is a matter of permutation of unique songs, no
   * repeat is possible. We call this the first part of the playlist.
   * For the first postion we choose between N options.
   * For the second position we choose between N-1 options.
   * For the third position we choose between N - 2 options.
   * This pattern repeats for the first K + 1 songs
   */

  let numOrderingFirstPart = 1

  let decreaseN = N
  while(decreaseN >= N-K) {
    numOrderingFirstPart *= decreaseN
    --decreaseN
  }

  /*
   * We have L - K -1 positions left to fill in the playlist. We call this the second part
   * of the playlist. In those positions we have to use the remaining N - K - 1 unique songs,
   * which leaves us with L - N slots to fill with repeating songs. We calcule permutation
   * with repetition to find the unique ways to distribute the remaining non-repeating songs.
   * To do so, we divide the permuation of all remaining slots by the permutation of the
   * repeating songs.
   */

  if(L-K-1 < 0) {
    // That means K >= L which can not be fulfilled
    return 0
  }

  let uniqueOrderingRemainingSongs = math.factorial(L-K-1) / math.factorial (L - N)

   /*
   * Now we have to consider the slots which are left to be filled with repeated songs.
   * Each such slot can be filled in N - K ways
   */

  let numOrderingSecondPart = uniqueOrderingRemainingSongs * math.pow(N-K, L-N);

  return numOrderingFirstPart * numOrderingSecondPart;
}


// Test
//console.log(numOfPlaylists(3, 1, 3))
//console.log(numOfPlaylists(1, 0, 3))
//console.log(numOfPlaylists(10, 3, 20))
//console.log(numOfPlaylists(10, 1, 100))
console.log(numOfPlaylists(10, 10, 10))
