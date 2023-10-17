export let calculateDays = (time) =>{
    const originalTimestamp = time;
    const timestampDate = new Date(originalTimestamp);
    const currentDate = new Date();
    const timeDifference = currentDate - timestampDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const daysAgoString = `${daysDifference} days ago`;
    return daysAgoString
}