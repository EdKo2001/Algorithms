// You need to create a function called countTeams that will receive four arguments: an array of integers called skills, an integer called minPlayers, an integer called minLevel and an integer called maxLevel.
// The skills array represents the skill level of each player. The function should determine how many teams can be formed with at least minPlayers players whose skill level is between minLevel and maxLevel, inclusive.
// The function should return an integer representing the total number of teams that can be formed per the criteria.

// The function should satisfy the following constraints:
// • The length of the skills array is at least 1 and at most 20.
// • minPlayers is at least 1 and at most the length of the skills array.
// • minLevel and maxLevel are both at least 1 and at most 1000.
// • Each element in the skills array is at least 1 and at most 1000

// Sample Input
// skills = [4, 8, 5, 6]
// minPlayers = 2
// minLevel = 5
// maxLevel = 7

// Sample Output
// 5

// Explanation 1
// The list includes players with skill levels [12, 4, 6, 13, 5, 10]
// They want to hire at least 3 players with skill levels between 4 and 10
// One of the players with the following skill levels { 4, 6, 5, 10 } meet the criteria.
// There are 5 ways to form a team at least 3 players: { 4 6 5 }, { 4 6 10 }, { 4 5 10 }, { 6 5 10 }, { 4 6 5 10 }

/**
 * Counts the number of teams that can be formed with at least minPlayers players whose skill level is between minLevel and maxLevel, inclusive, from the given skills array.
 *
 * @param {number[]} skills - An array of integers representing the skill level of each player. Each element in the skills array is at least 1 and at most 1000.
 * @param {number} minPlayers - An integer representing the minimum number of players required to form a team. minPlayers is at least 1 and at most the length of the skills array.
 * @param {number} minLevel - An integer representing the minimum skill level of the players required to form a team. minLevel is at least 1 and at most 1000.
 * @param {number} maxLevel - An integer representing the maximum skill level of the players required to form a team. maxLevel is at least 1 and at most 1000.
 * @returns {number} - An integer representing the total number of teams that can be formed per the criteria.
 */
const countTeams = (
  skills: number[],
  minPlayers: number,
  minLevel: number,
  maxLevel: number
): number => {
  // Filter the skills array to get only the players whose skill level is within the required range
  const filteredSkills = skills.filter(
    (skill) => skill >= minLevel && skill <= maxLevel
  );

  // If there aren't enough players with the required skill level, return 0
  if (filteredSkills.length < minPlayers) {
    return 0;
  }

  // Calculate the number of possible teams using the formula for combinations
  let numTeams = 0;
  for (let i = minPlayers; i <= filteredSkills.length; i++) {
    numTeams += combinations(filteredSkills.length, i);
  }

  return numTeams;
};

// Helper function to calculate the number of combinations
/**
 * Calculates the number of combinations of `k` items that can be selected from a set of `n` items.
 *
 * @param {number} n - The total number of items in the set.
 * @param {number} k - The number of items to select.
 * @returns {number} The number of possible combinations.
 */
const combinations = (n: number, k: number): number => {
  let result = 1;

  for (let i = 0; i < k; i++) {
    result *= (n - i) / (i + 1);
  }

  return result;
};

// Helper function's calculations with Sample Input data

// First itteration
// n = 4, k = 3
// 0 | 4 / 1 = 4
// 1 | 3 / 2 = 1.5
// 2 | 2 / 3 = 0.6666666666666666
// 4 * 1.5 * 0.6666666666666666 = 4

// Second itteration
// n = 4, k = 4
// 0 | 4 / 1 = 4
// 1 | 3 / 2 = 1.5
// 2 | 2 / 3 = 0.6666666666666666
// 3 | 1 / 4 = 0.25
// 4 * 1.5 * 0.6666666666666666 * 0.25 = 1

// Sum 4 + 1 = 5 => 5 combinations

console.log(countTeams([12, 4, 6, 13, 5, 10], 3, 4, 10)); // Output: 5
