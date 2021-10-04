import {
  CgWebsite,
  BsFillTelephoneFill,
  FaMapMarkedAlt,
  AiOutlineMail,
} from "react-icons/all";
const Card = (props) => {
  const imageUrl =
    "https://banner2.cleanpng.com/20180219/vje/kisspng-free-content-silhouette-clip-art-black-group-cliparts-5a8b6290520667.950292171519084176336.jpg";

  return (
    <div className={"card"}>
      <div className={"info"}>
        <div className={"image"}>
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <img alt={"image"} src={imageUrl} width={"100px"} height={"100px"} />
        </div>

        <div className={"data"}>
          <div className={'title'}>
            <div className={"fullName"}>
              <p>{props.data["team-full"]}</p>
            </div>
           <div>
             {props.data['establishment'] && <p>{"/" + props.data['establishment']}</p>}
           </div>
          </div>

          <div className={"address iconText"}>
            <FaMapMarkedAlt />
            <p>{props.data["address"]}</p>
          </div>

          <div className={"email iconText"}>
            <AiOutlineMail />
            <p>{props.data["email"]}</p>
          </div>

          <div className={"tel iconText"}>
            {props.data["phone"] && (
              <>
                <BsFillTelephoneFill /> <p>{props.data["phone"]}</p>
              </>
            )}
          </div>

          <div className={"website iconText"}>
            {props.data["website"] && (
              <>
                <CgWebsite /><p> <a href={props.data['website']} target={'_blank'}>{props.data["website"]}</a></p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className={"description"}>
        <p>{props.data["constituency-description"]}</p>
      </div>
    </div>
  );
};

export default Card;
