import {useState,useEffect} from "react";
import {Bar,Line,Pie} from "react-chartjsx-2";
const Chart = () =>{
    const [element,setElement] = useState([])
    const[labels,setLables] = useState(['January', 'February', 'March', 'April', 'May'])
    const[datasets,setDatasets] = useState(
        [
{
label:"Covid-19",
backgroundColor:[
'#B21F00','#161750','#12BD93','#57BD12'
],
borderColor:'rgba(0,0,0,1)',
borderWidth:2,
data:[65,59,80]


}


    ]
)
useEffect(()=>{
    fetch("http://localhost:5000/allpost", {
      header: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    }).then(res=>res.json())
    .then(result=>{
        setLables(result.posts.map(item => item.title))
        setElement(result.posts.map(item => item.length));
        
    })
},[])
datasets.forEach(item => {
    item.data = element;
})
const statedata = {
    labels,datasets
}
  return (
    <div>
      <div
        style={{
          height: "400px",
          width: "60%",
          marginBottom: "50px",
          marginTop: "50px",
          marginLeft: "20%",
        }}
      >
        <Pie
          data={statedata}
          options={{
            title: {
              display: true,
              text: "Covid-19 active case",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Chart;