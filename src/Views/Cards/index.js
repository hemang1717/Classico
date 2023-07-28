import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getCard } from "../../Redux/action";
const Cards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCard());
  }, []);

  let cardData = useSelector((state) => state.cards);
  let cardsOnEachPage = Math.ceil(cardData?.length / 7);
  let lastCardId = cardsOnEachPage * currentPage;
  let firstCardId = lastCardId - cardsOnEachPage;

  return (
    <div className="cards">
      <div className="cardHeading">
        <h1>Cards</h1>
      </div>
      <div className="cardPagination">
        <button
          className={
            currentPage === 1
              ? "paginationButtons disable"
              : "paginationButtons"
          }
          onClick={()=>setCurrentPage(currentPage-1)}
        >
          Prev
        </button>
        <h2>{currentPage}</h2>
        <button
          className={
            lastCardId >= cardData.length
              ? "paginationButtons disable"
              : "paginationButtons"
          }
          onClick={()=>setCurrentPage(currentPage+1)}
        >
          Next
        </button>
      </div>
      <div className="cardItems">
        {cardData?.slice(firstCardId, lastCardId).map((card) => (
          <div className="eachCard" key={card.id}>
            <div className="cardInformation">
              <img
                src={card.thumbnailUrl}
                alt="Card Image"
                className="cardImage"
              />
              <p>{card.title}</p>
            </div>
            <div className="buttons">
              <button className="editButton">Edit</button>
              <button className="deleteButton">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
