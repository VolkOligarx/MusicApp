import PlaylistTitle from "../PlaylistTitle/PlaylistTitle"
import Playlist from "../Playlist/Playlist"
import { useState } from "react"


const Centerblock = () => {

        const [filter, setFilter] = useState(null)
        
        const selected = (select) => {
          filter === select ? setFilter(null) : setFilter(select)
        }

    return (
        <div className="centerblock">
    <div className="centerblock__search search">
    <svg className="search__svg">
        <use xlinkHref="img/icon/sprite.svg#icon-search" />
    </svg>
    <input
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
    />
    </div>      
    <h2 className="centerblock__h2">Треки</h2>
    <div className="centerblock__filter filter">
    <div className="filter__title">Искать по:</div>
    <div 
    $active={filter === 'author'}

          onClick={() => selected('author')} 
          
          className="filter__button button-author _btn-text">

            исполнителю
    </div>
    {filter === 'author' && (
          <div className="filter__select">
            <div className="filter__select__icon">
              <p className="filter__select__icon__choose">Michael Jackson</p>
              <p className="filter__select__icon__choose">Frank Sinatra</p>
              <p className="filter__select__icon__choose">Calvin Harris</p>
              <p className="filter__select__icon__choose">Zhu</p>
              <p className="filter__select__icon__choose">Arctic Monkeys</p>
              <p className="filter__select__icon__choose">Nero</p>
              <p className="filter__select__icon__choose">Skeeter Davis</p>
            </div>
          </div>
        )}
    
    <div 
    $active={filter === 'year'}
          onClick={() => selected('year')}
          
          className="filter__button button-year _btn-text">
            году выпуска
    </div>
            {filter === 'year' && (
          <div className="filter__select">
            <div className="filter__select__icon">
              <div className="filter__year">
                <input type="radio" name="sort" id="new" />
                <label className="filter__select__icon__choose" htmlFor="new">Более новые</label>
                <input type="radio" name="sort" id="old" />
                <label className="filter__select__icon__choose" htmlFor="old">Более старые</label>
              </div>
            </div>
          </div>
        )}
    
    <div 
    $active={filter === 'genre'}
          onClick={() => selected('genre')} 
          
          className="filter__button button-genre _btn-text">
            жанру
            </div>
            {filter === 'genre' && (
          <div className="filter__select">
            <div className="filter__select__icon">
              <p className="filter__select__icon__choose">Рок</p>
              <p className="filter__select__icon__choose">Хип-хоп</p>
              <p className="filter__select__icon__choose">Поп-музыка</p>
              <p className="filter__select__icon__choose">Техно</p>
              <p className="filter__select__icon__choose">Инди</p>
              <p className="filter__select__icon__choose">Реп</p>
              <p className="filter__select__icon__choose">Джаз</p>
            </div>
          </div>
        )}
    </div>      
    <div className="centerblock__content">
        <div className="content__title">
          <PlaylistTitle />
        </div>
        <div className="content__playlist">
          <Playlist />
        </div>
        </div>
    </div>
    )
}
export default Centerblock