function howManyTimes(time1, time2) {
    const startSec = Math.floor(new Date(time1.replace(/-/g, '/')).getTime() / 1000);
    const endSec = Math.floor(new Date(time2.replace(/-/g, '/')).getTime() / 1000);
    let counter = 0;
    let currentStrikeSec = Math.floor(startSec / 1800) * 1800;
    while (currentStrikeSec < endSec) {
        const date = new Date(currentStrikeSec * 1000);
        const mins = date.getMinutes();
        const hrs = date.getHours();
        let strikesCount = 1;
        if (mins === 0) {
            strikesCount = hrs % 12 || 12;
        }
        const strikeStart = currentStrikeSec;
        const strikeEnd = currentStrikeSec + strikesCount;
        const overlapStart = Math.max(startSec, strikeStart);
        const overlapEnd = Math.min(endSec, strikeEnd);
        if (overlapStart < overlapEnd) {
            counter += (overlapEnd - overlapStart);
        }
        currentStrikeSec += 1800;
    }

    return counter;
}