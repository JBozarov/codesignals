function centuryFromYear(year) {
    let century = Math.floor(year/100)
    return year%100 === 0 ? century : century + 1
}
