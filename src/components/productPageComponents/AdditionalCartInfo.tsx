import boxIcon from "../../resources/images/laatikko.webp";
import recycleIcon from "../../resources/images/kierrätys.webp";
import Image from "react-bootstrap/Image";
import './AdditionalCartInfo.scss';

type Info = {
  img: any,
  title: string,
  description: string
}
const additionalInfo: Array<Info> = [
  {
    img: boxIcon,
    title: "Lähetys",
    description: "Tilaus tulee perille 3-5 arkipäivän sisällä"
  },
  {
    img: recycleIcon,
    title: "Palautusoikeus",
    description: "Tuotteilla on 15 päivän palautusoikeus"
  }

]
export const AdditionalCartInfo = (props : {}) => {
  return (
    <div className="my-4">
      {
        additionalInfo.map((info, i) => {
          return (
            <div>
              <Image className="cartInfo__thumbnail" src={info.img} fluid/>
              <span>{info.title}</span>
              <p>{info.description}</p>
            </div>
          )
        })
      } 
    </div>
  )
}
