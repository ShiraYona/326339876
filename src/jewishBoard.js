import { useEffect, useState } from "react"
import { Fieldset } from 'primereact/fieldset';
import { Calendar } from 'primereact/calendar';

const JewishBoard = () => {

    const [allDates, setAllDates] = useState([])
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [onlyParashot, setOnlyParashot] = useState(false)

    const fetchData = () => {
        fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${startDate}&end=${endDate}`)
            .then(res => res.json())
            .then(data => { setAllDates(data); console.log(data); })
    }

    useEffect(() => {
        if (startDate != "" && endDate != "")
            if (startDate.charAt(4) === '-' && endDate.charAt(4) === '-' && startDate.charAt(7) === '-' && endDate.charAt(7) === '-')
                fetchData()
    }, [startDate, endDate, onlyParashot])
    return (
        <>
            <input placeholder="Enter begin date" onBlur={(e) => setStartDate(e.target.value)}></input>
            <br></br>
            <input placeholder="Enter end date" onBlur={(e) => setEndDate(e.target.value)}></input>
            <br></br>
            <span>הצג פרשות שבוע בלבד</span>
            <input type={"checkbox"} onChange={() => (onlyParashot === true ? setOnlyParashot(false) : setOnlyParashot(true))}></input>

            
            {/* <Calendar placeholder="Enter begin date" dateFormat="yy-mm-dd" onChange={(e) => setStartDate(e.target.value) }></Calendar>
            <br></br>
            <Calendar placeholder="Enter end date" dateFormat="yy-mm-dd" onChange={(e) => setEndDate(e.target.value)}></Calendar> 
            <br></br>
            <span>הצג פרשות שבוע בלבד</span>
            <input type={"checkbox"} onChange={() => (onlyParashot === true ? setOnlyParashot(false) : setOnlyParashot(true))}></input> */}
           
            
            {onlyParashot === true && allDates && allDates.map(item => {
                    if (item.className === "parashat") {
                        return (                          
                            //הקוד לפני שהשתמשתי בספריה
                            // <div>
                            //     <table style={{ borderStyle: "dashed", border: "5", borderColor: "black" }}>
                            //         <tr>{item.hebrew}</tr>
                            //         <tr>{item.description}</tr>
                            //         <tr>{item.start}</tr>
                            //     </table>
                            //     <br></br>
                            // </div>
                     
                            //הקוד לאחר השימוש בספריה
                            <Fieldset legend={item.hebrew}>
                                <tr>{item.description}</tr>
                                <tr>{item.start}</tr>
                            </Fieldset>
                        )
                    }
                })}
             {onlyParashot === false && allDates && allDates.map(item => {   
                    return (
                        //הקוד לפני שהשתמשתי בספריה
                        // <div>
                        //     <table style={{ borderStyle: "dashed", border: "5", borderColor: "black" }}>
                        //         <tr>{item.hebrew}</tr>
                        //         <tr>{item.description}</tr>
                        //         <tr>{item.start}</tr>
                        //     </table>
                        //     <br></br>
                        // </div>

                        //הקוד לאחר השימוש בספריה
                        <Fieldset legend={item.hebrew} >
                            <h3>{item.description}</h3>
                            <h5>{item.start}</h5>
                        </Fieldset>
                    )
            }
            )}
        </>
    )
}
export default JewishBoard;