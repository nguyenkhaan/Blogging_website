const Colors = ['#89A3B2', '#d0ebfe', '#89cbfd', '#41acfc', '#0179d1'] //[0 , 1 , 2 , 3 , >=3]
let totalAction = 1810;   //CALL API DE LAY RIENG 
const heatMapData = {
    startDate: new Date('2016-01-01'),
    endDate: new Date('2017-01-01'),
    count: [], 
}
const getHeatmapColors = (activityCount) => {
    return Colors[Math.min(4, Math.max(0, activityCount))]
}
function CalendarHeatMap(startDate, endDate, activityCount) 
{
    heatMapData.startDate = startDate 
    heatMapData.endDate = endDate 
    heatMapData.count = activityCount 
    const dayInMonth = Math.ceil((heatMapData.endDate - heatMapData.startDate) / (1000 * 60 * 60 * 24))
    console.log(startDate , endDate); 
    heatMapData.count = Array(dayInMonth).fill(0);
    const grid = Array.from({ length: dayInMonth }, (_, i) => {
        const date = new Date(heatMapData.startDate)
        //Ham getDate() chi tra ve so ngay trong thang 
        //Nếu như đem nó truyền thẳng vào new Date() thì nó sẽ tính i ngày 
        //bắt đầu từ 1 cột mốc 1970-01-01
        //Lí do in ra trình duyệt vẫn thấy đầy đủ là vì cách browser tự xử lí
        //không phải bản chất JS xử lí 
        //FAKE API 
        heatMapData.count[i] = Math.floor(Math.random() * 5)
        date.setDate(date.getDate() + i);
        return date.toISOString().slice(0, 10)
    })
    const getColorInNthDay = (index) => {
        const activityCount = heatMapData.count[index];
        return getHeatmapColors(activityCount); 
    }
    const getTitleInDay = (index , day) => {
        const activityCount = heatMapData.count[index];
        return `${activityCount} posts on ${day}`
    }
    return {
        grid, getColorInNthDay, getTitleInDay
    }

}

export { CalendarHeatMap, totalAction ,getHeatmapColors }