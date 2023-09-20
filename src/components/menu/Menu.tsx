import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";

function Menu() {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="items" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listitem) => (
            <Link to={listitem.url} className="listItems" key={listitem.id}>
              <img src={listitem.icon} alt="" />
              <span className="listitemtitle">{listitem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Menu;
