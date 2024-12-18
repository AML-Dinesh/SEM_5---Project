// Calculate distance between two points using Haversine formula
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};

// Heuristic function for A* (straight-line distance)
const heuristic = (node, goal) => {
  return calculateDistance(node.lat, node.lng, goal.lat, goal.lng);
};

export const findOptimalRoute = (bins) => {
  // Filter bins with fullness > 65%
  const fullBins = bins.filter(bin => bin.fullness > 65);
  if (fullBins.length <= 1) return fullBins;

  const route = [fullBins[0]]; // Start with the first bin
  let currentBin = fullBins[0];
  const remainingBins = new Set(fullBins.slice(1));

  while (remainingBins.size > 0) {
    let bestNextBin = null;
    let bestScore = Infinity;

    // Find the next best bin using A* criteria
    remainingBins.forEach(nextBin => {
      const g = calculateDistance(currentBin.lat, currentBin.lng, nextBin.lat, nextBin.lng);
      const h = Array.from(remainingBins)
        .filter(b => b !== nextBin)
        .reduce((acc, b) => acc + heuristic(nextBin, b), 0);
      const f = g + h;

      if (f < bestScore) {
        bestScore = f;
        bestNextBin = nextBin;
      }
    });

    if (bestNextBin) {
      route.push(bestNextBin);
      remainingBins.delete(bestNextBin);
      currentBin = bestNextBin;
    }
  }

  return route;
};