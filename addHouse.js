import "./addHouse.css";
import { useState } from "react";
import {  useDispatch } from "react-redux";
import { addHouse } from "./reduxHouse/actions";
export default function AddHouse() {
    const [Img, setImg] = useState([]);
    const[id,setId]=useState(0)
    const[type,setType]=useState("")
    const[title,setTitle]=useState("")
    const[location,setLocation]=useState("")
    const[city,setCity]=useState("")
    const[nights,setNights]=useState(0)
    const[price,setPrice]=useState(0)
    const[guests,setGuests]=useState(0)
    const[bedrooms,setBedrooms]=useState(0)
    const[beds,setBeds]=useState(0)
    const[baths,setBaths]=useState(0)
    const dispatch=useDispatch()

    const handleChange = (event) => {
        const fileList = event.target.files;
        const newPhotos = [...Img];
    
        for (let i = 0; i < fileList.length; i++) {
          newPhotos.push(fileList[i]);
        }
    
        setImg(newPhotos);
     };
  return (
    <div className="addhouse">
      <div className="house_container">
        <form>
          <div className="upimg">
            <label for="file" class="file-style">
              <img src="images/upload.jpg" width="50" />
              <p>Upload Photo</p>
            <input type="file" multiple onChange={handleChange} />
            </label>
            <div className="photos">
              <div className="house_img">
                {Img.map((Img, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(Img)}
                    alt="photo"
                    onChange={(ev)=>setImg(ev.target.value)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="cardbox">
            <div className="box">
              <label>Id</label>
              <br />
              <input type="text" onChange={(ev)=>setId(parseInt(ev.target.value))} />
            </div>
            <div className="box">
              <label>Type</label>
              <br />
              <input type="text" onChange={(ev)=>setType(ev.target.value)}/>
            </div>
          </div>

          <div className="cardbox">
            <div className="box">
              <label>Location</label>
              <br />
              <input type="text" onChange={(ev)=>setLocation(ev.target.value)}/>
            </div>

            <div className="box">
              <label>City</label>
              <br />
              <input type="text" onChange={(ev)=>setCity(ev.target.value)}/>
            </div>
          </div>

          <div className="cardbox">
            <div className="box">
              <label>Day</label>
              <br />
              <input type="text" onChange={(ev)=>setNights(parseInt(ev.target.value))}/>
            </div>

            <div className="box">
              <label>Prix</label>
              <br />
              <input type="text" onChange={(ev)=>setPrice(parseInt(ev.target.value))}/>
            </div>
          </div>

          <div className="cardbox1">
            <div className="box">
              <label>guests</label>
              <br />
              <input type="text" onChange={(ev)=>setGuests(parseInt(ev.target.value))}/>
            </div>

            <div className="box">
              <label>bedrooms</label>
              <br />
              <input type="text" onChange={(ev)=>setBedrooms(parseInt(ev.target.value))}/>
            </div>

            <div className="box">
              <label>beds</label>
              <br />
              <input type="text" onChange={(ev)=>setBeds(parseInt(ev.target.value))}/>
            </div>
          </div>

          <div className="box">
            <label>baths</label>
            <br />
            <input type="text" onChange={(ev)=>setBaths(parseInt(ev.target.value))}/>
          </div>

          <button type="submit" onClick={()=>dispatch(addHouse(id,type,title,location,city,nights,price,Img,guests,bedrooms,beds,baths))}>Add House</button>
        </form>
      </div>
    </div>
  );
}
