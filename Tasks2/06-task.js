class ExtendedDate extends Date {
    print() {
        console.log(`${super.getDay()}.${super.getMonth()}`);
    }

    defineTimeline() {
        let now = Date.now();

        return super.getTime() >= now;
    }

    isLeapYear() {
        return new Date(super.getFullYear(), 1, 29).getDate() === 29;
    }

    nextDate() {
        return new Date(super.getTime() + 86400000);
    }
}