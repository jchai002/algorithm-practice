/**********************************************************************
  *  Problem 2: Coin Change                                            *
  *                                                                    *
  *  Prompt: US Currency has coins in circulation with the             *
  *          following value in cents: [1, 5, 10, 25, 50, 100]         *
  *                                                                    *
  *          Given a value, find how many unique ways to make change   *
  *          given the coin values in circulation.                     *
  *                                                                    *
  *  Input:  An integer N (value from which to make change)            *
  *  Output: An integer (number of unique ways to make change)         *
  *                                                                    *
  *  Time Complexity: O(nm)                                            *
  *  Auxiliary Space Complexity: O(n)                                  *
  *                                                                    *
  *  Example: input = 11                                               *
  *           output = 4 ([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],           *
  *                       [5, 1, 1, 1, 1, 1, 1],                       *
  *                       [5, 5, 1],                                   *
  *                       [10, 1])                                     *
  *                                                                    *
  *  Hint: www.geeksforgeeks.org/dynamic-programming-set-7-coin-change *
  *                                                                    *
  **********************************************************************/

//tabulation
