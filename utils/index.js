export const compareFileName = (fileNameA, fileNameB) => {
    const regex = /\d+/g;
    const numA = parseInt(fileNameA.match(regex)?.[0] || 0, 10);
    const numB = parseInt(fileNameB.match(regex)?.[0] || 0, 10);
    if (!isNaN(numA) && !isNaN(numB)) {
        if (numA === numB) {
            return fileNameA.localeCompare(fileNameB);
        }
        return numA - numB; // Sort numerically
    }
    return fileNameA.localeCompare(fileNameB);
}