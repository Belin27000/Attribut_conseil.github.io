
const fullDate = () => {
    let newDate = new Date();
    newDate.setMonth(newDate.getMonth() - 1)

    newDate.setDate(newDate.getDate() - 8)

    const options = { day: '2-digit', month: 'long', year: 'numeric' }
    const dDay = newDate.toLocaleDateString('fr-FR', options)

    return dDay
};

export default fullDate;