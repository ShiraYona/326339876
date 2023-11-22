// const ShowSpecialDates =()=>{


//     const fetchData = () => {
//         fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${startDate}&end=${endDate}`)
//             .then(res => res.json())
//             .then(data => { setAllDates(data); console.log(data); })
//     }

//     useEffect(() => {
//         if (startDate != "" && endDate != "")
//             fetchData()
//     }, [startDate, endDate])

//     return(
//         <>
//         {allDates && allDates.map(item => {
//             // if(OnlyParashot === true)
//             // if (item.classsName === "parashat")
//                 return (
//                     <div>
//                         <table style={{ borderStyle: "dashed", border: "5", borderColor: "black" }}>
//                             <tr>{item.hebrew}</tr>
//                             <tr>{item.description}</tr>
//                             <tr>{item.start}</tr>
//                         </table>
//                         <br></br>
//                     </div>
//                 )
//         }
//         )}
//         </>
//     )
// }